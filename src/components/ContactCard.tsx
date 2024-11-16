function ContactCard() {
  return (
    <>
    
        <div className="flex flex-col w-full items-center justify-center h-[350px] flex-wrap px-5">

            <h1 className="text-4xl text-fuchsia-600 mb-5 font-bold">Contact</h1>

            <p className="text-white mb-8 text-2xl text-center">For any questions feel free to contact me via email or X</p>

            <p className="text-white mb-2 text-xl">Email: <a href="mailto:charliedavidcrane13@gmail.com" target="_blank" className="underline text-fuchsia-600">charliedavidcrane13@gmail.com</a></p>
            
            <p className="text-white mb-2 text-xl">X (Formerly twitter): <a href="https://x.com/cc_pwnn" target="_blank" className="underline text-fuchsia-600">@cc_pwnn</a></p>

        </div>
    
    </>
  )
}

export default ContactCard