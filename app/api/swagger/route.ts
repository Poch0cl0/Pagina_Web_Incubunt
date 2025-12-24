import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { parse } from 'yaml'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'docs', 'api', 'swagger.yaml')
    
    // Verificar que el archivo existe
    if (!existsSync(filePath)) {
      return Response.json(
        { error: 'Archivo swagger.yaml no encontrado', path: filePath },
        { status: 404 }
      )
    }

    const fileContents = readFileSync(filePath, 'utf8')
    
    if (!fileContents || fileContents.trim().length === 0) {
      return Response.json(
        { error: 'El archivo swagger.yaml está vacío' },
        { status: 500 }
      )
    }

    try {
      const parsed = parse(fileContents)
      
      if (!parsed) {
        return Response.json(
          { error: 'Error al parsear el archivo YAML - resultado vacío' },
          { status: 500 }
        )
      }
      
      return Response.json(parsed, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (yamlError: unknown) {
      // Error específico del parseo YAML
      const yamlMessage = yamlError instanceof Error ? yamlError.message : 'Error desconocido al parsear YAML'
      const yamlLine = (yamlError as any)?.linePos?.[0]?.line || 'N/A'
      
      console.error('Error de parseo YAML:', yamlError)
      
      return Response.json(
        { 
          error: 'Error de sintaxis en el archivo YAML',
          message: yamlMessage,
          line: yamlLine,
          hint: 'Revisa la sintaxis YAML, especialmente indentación y caracteres especiales'
        },
        { status: 500 }
      )
    }
  } catch (error: unknown) {
    console.error('Error en /api/swagger:', error)
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
    const errorStack = error instanceof Error && process.env.NODE_ENV === 'development' 
      ? error.stack 
      : undefined
    
    return Response.json(
      { 
        error: 'Error al cargar la documentación',
        message: errorMessage,
        stack: errorStack
      },
      { status: 500 }
    )
  }
}
