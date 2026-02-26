import Typewriter from 'typewriter-effect'

export default function AnimatedIntro() {
  return (
    <div className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400">
        Hi, I&apos;m Jhon - A passionate
        <span className='text-indigo-400 font-bold'>
            <Typewriter 
                options={{
                    strings: [
                        'Web Developer',
                        'Nextjs Developer',
                        'React Expert',
                        'Tech Enthusiast',
                        'UI/UX Designer'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    wrapperClassName: 'inline-block py-6',
                }}
            />
        </span>
    </div>
  )
}
