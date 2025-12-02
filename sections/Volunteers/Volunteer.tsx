export const Volunteer = () => {
    return(
        <section className="flex flex-row py-10 px-7 md:px-15  lg:px-25 gap-7 lg:gap-20 lg:py-0 items-center overflow-hidden">

            <div className="flex flex-col gap-10 md:gap-7">

                <h1 className="text-[30px] lg:text-[35px] font-bold text-[#002B4F]"><span className="text-[18px] lg:text-[25px]">NUESTRO MOTOR</span><br />LOS VOLUNTARIOS</h1>

                <p className="text-[#002B4F] lg:text-[18px]">
                   En INCUBUNT creemos que las ideas se construyen en equipo.  
                   Conoce a las personas que hacen posible <span className="font-bold">cada proyecto y cada logro.</span> 
                </p>

                <button className="bg-[#08306B] rounded-xl w-40 h-10 lg:w-52 lg:h-12 text-[12px] lg:text-[15px] text-white hover:bg-[#204479] cursor-pointer">
                    CONOCE AL EQUIPO
                </button>

            </div>  

            <div className="hidden md:flex items-center lg:block">
                <img src="/images/SVolunteer.webp" alt="Voluntarios" className="md:w-300 lg:w-400 lg:object-cover lg:scale-124"/>
            </div>

            

        </section>
    );
};