'use client'
import { useEffect, useState } from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'

export default function ApiDocs() {
  const [swaggerDoc, setSwaggerDoc] = useState(null)
  const [error, setError] = useState<string | null>(null)
  const [errorDetails, setErrorDetails] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Cargar desde el route API que parsea el YAML
    fetch('/api/swagger')
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({ error: 'Error desconocido' }))
          throw errorData
        }
        return res.json()
      })
      .then((data) => {
        if (data.error) {
          setError(data.error)
          setErrorDetails(data)
        } else {
          setSwaggerDoc(data)
        }
      })
      .catch((err) => {
        console.error('Error cargando Swagger:', err)
        setError(err.error || err.message || 'Error al cargar la documentación')
        setErrorDetails(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando documentación...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl">
          <h2 className="text-red-800 font-bold text-xl mb-2">Error al cargar la documentación</h2>
          <p className="text-red-600 mb-2 font-semibold">{error}</p>
          {errorDetails?.message && (
            <p className="text-red-700 mb-2">
              <strong>Detalle:</strong> {errorDetails.message}
            </p>
          )}
          {errorDetails?.line && errorDetails.line !== 'N/A' && (
            <p className="text-red-700 mb-2">
              <strong>Línea:</strong> {errorDetails.line}
            </p>
          )}
          {errorDetails?.hint && (
            <p className="text-sm text-gray-600 mb-2 italic">{errorDetails.hint}</p>
          )}
          <p className="text-sm text-gray-600 mt-4">
            Verifica que el archivo <code className="bg-gray-200 px-1 rounded">docs/api/swagger.yaml</code> existe y está correctamente formateado.
          </p>
        </div>
      </div>
    )
  }

  if (!swaggerDoc) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SwaggerUI spec={swaggerDoc} />
    </div>
  )
}