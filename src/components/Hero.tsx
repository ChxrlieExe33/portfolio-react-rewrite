import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons"

function Hero() {
  return (
    <>

        <div className="w-full h-[400px] md:h-[600px] bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center flex-wrap px-8">

            <h1 className="text-4xl font-bold text-white mb-6 text-center">Hello, My name is Charles</h1>

            <p className="text-white font-bold mb-7 text-center">Im a Web Developer and Cybersecurity Enthusiast from Malaga, Spain</p>

            <div className="flex items-center space-around">

              <a href="https://x.com/cc_pwnn" target="_blank"><FontAwesomeIcon icon={faXTwitter} size="2xl" color="white" className="mx-4"/></a>
              <a href="https://github.com/ChxrlieExe33" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" color="white" className="mx-4"/></a>
              <a href="https://www.linkedin.com/in/charlesdavidcrane/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" color="white" className="mx-4"/></a>

            </div>

        </div>
    
    </>
  )
}

export default Hero