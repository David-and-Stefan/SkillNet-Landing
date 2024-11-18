import image from "../assets/different.webp"

export function WeAreDifferent() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:flex lg:flex-row-reverse lg:py-16 lg:px-6">
                <div className="lg:w-1/2 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why SkillNet is Different</h2>
                    <p className="mb-4"><span className="font-semibold text-xl">What makes SkillNet your ultimate platform for growth?</span></p>
                    <p>Designed for both organizers and participants, SkillNet goes beyond basic scheduling. <span className="font-semibold text-purple-400">It brings everyone together in a fully interactive and digital environment</span>, making it easy to manage lessons, join groups, and explore new opportunities. 
                        Plus, with secure authentication, <span className="font-semibold text-purple-400">your data and activities are always protected</span>.</p>
                </div>
                <div className="gap-4 lg:w-1/2 mt-8">
                    <img className="w-[60rem] rounded-2xl" src={image} alt="SkillNet content" />
                </div>
            </div>
        </section>
    );
}
