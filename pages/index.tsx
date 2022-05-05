import Alert from '@mui/material/Alert';
import Hero from '../components/Static/About/Hero.jsx';
import Text from '../components/Static/About/Text.jsx';
import Head from 'next/head';
import Content from '../components/Static/Contents/Content.jsx';

export default function Index() {
    return (
        <>
        
        <div className="h-96 flex items-center justify-center">
            <div>
                <h1 className="font-bold text-white text-6xl text-center mb-5">Arika<span className="!font-bold bg-gradient-to-br from-indigo-500 to-cBlue text-transparent bg-clip-text">Bot</span></h1>
                <p className="uppercase text-gray-300 text-sm text-center mb-5">Sınırsız müzik keyfini arika ile yaşayın. Arika ile sunucunuzu canlandırın 7/24 müziğin keyfini çıkarın!</p>
                <a href="/panel" className="bg-blue-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-5 w-36 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fa-solid fa-right-to-bracket"/>Panel
                </a>
                <a target="_blank" href="https://discord.com/oauth2/authorize?client_id=786355954231803926&scope=bot&permissions=8" className="bg-green-400 hover:bg-white shadow-blue-800/20 hover:shadow-white/20 shadow-xl py-3 px-6 mx-auto mt-7 w-36 flex items-center justify-center rounded-lg text-zinc-900 transition-all">
                    <i className="mr-1.5 fab fa-discord" />Davet Et
                </a>
            </div>
        </div>
        <Hero />
        <Text />
        <Content />
        <img src="https://arikabot.xyz/wp-content/uploads/2022/05/1a23068e966efce6fb32ca9fecc65eed.svg" alt="logo" className="h-50 w-50" />
        <div className="my-24 flex flex-col items-center justify-center bg-dark-50 py-10 px-6 md:flex-row md:bg-transparent xl:px-20 2xl:px-52">
            < div className="flex h-auto w-full flex-col justify-between rounded-lg bg-none p-6 md:flex-row md:bg-dark-50 md:p-12">
                <div className="mb-4 max-w-2xl text-center text-emerald-500 md:mb-0 md:text-left">
                <h1 className="mb-2 font-ginto text-4xl font-extrabold text-center">Haydi Hemen Şimdi, Topluluğuna Dahil Et!</h1>
                <a href="/davet" className="m-auto flex items-center justify-between rounded-lg border border-emerald-500 border-opacity-40 py-2 px-52 font-ginto text-xl font-semibold text-emerald-500 transition-all hover:border-opacity-90 hover:bg-emerald-500 hover:text-white md:m-0">Topluluguna Davet Et</a>
                </div>
            </div>
        </div>
        <div className="max-w-6xl w-full my-24">
            <div className="text-center">
                <p className="text-white text-4xl font-large">Biz <span className="!font-bold bg-gradient-to-br from-indigo-500 to-cBlue text-transparent bg-clip-text">Kimiz?</span></p>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="w-full flex flex-col items-center bg-zinc-500/5 transition-all duration-200 shadow-lg p-6 py-12 rounded-md text-center">
                        <img alt="0" draggable="false" className="rounded-full" src="https://cdn.discordapp.com/avatars/267604752764764160/60312646bdbe05024f32d961239e4d9c.webp?size=512" width="256"></img>
                        <div className="flex w-full mt-6 justify-between justify-center text-white"></div>
                            <div>
                            <p className="text-xl font-medium capitalize text-center text-white">Screw</p>
                            <span className="text-sm font-light text-white/50 text-center">#0805</span>
                            <p className="!font-bold bg-gradient-to-br from-indigo-400 to-cBlue text-transparent bg-clip-text">Front-End Developer</p>
                            <div className="flex items-center gap-1">
                                <a href="https://github.com/screwdev" target="_blank" className="cursor-pointer transition-all duration-200 w-10 h-10 hover:bg-zinc-500/10 rounded-full flex items-center justify-center text-white"><i className="fab fa-github"></i></a>
                                <a href="https://discord.com/users/267604752764764160" target="_blank" className="cursor-pointer transition-all duration-200 w-10 h-10 hover:bg-zinc-500/10 rounded-full flex items-center justify-center text-white"><i className="fab fa-discord"></i></a>
                            </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
        </>
    
    
    );
};


