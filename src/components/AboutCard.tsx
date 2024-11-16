
function AboutCard() {
  return (
    <>
    
        <div className="flex justify-center w-full">

            <div className="flex flex-col flex-wrap justify-center items-center mx-4 md:w-3/5 h-[500px] bg-neutral-800 mt-12 rounded-2xl px-5 md:px-24">
            
                <div className="inline-block"> <h1 className="font-bold text-4xl mb-5 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-orange-500 pr-1">Hi, I'm Charles</h1></div>

                <p className="text-white text-center">I'm a 21 year old Web Developer with an interest in Cybersecurity, 
                    I love coding and hacking CTF games.
                    Currently studying Web Development at <a href="https://medac.es/" target="_blank" className="text-fuchsia-700 underline font-bold">MEDAC Malaga</a>.
                </p>

                <br></br>

                <p className="text-white text-center">I currently have the <a href="https://certified.tcm-sec.com/acd109a6-3843-4161-8575-1455b4ac69e6#acc.H29zr4qO" target="_blank" className="text-fuchsia-700 underline font-bold"> PNPT Certification </a>   
                and I'm hoping to start a career in Cybersecurity later down the Line.</p>

            </div>

        </div>
    
    </>
  )
}

export default AboutCard