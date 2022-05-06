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
            <CookieConsent debug={true} location="bottom" style={{background: '#000000', textAlign:'center'}} buttonStyle={{color:'#000000', background:'#00FF99'}} buttonText="Kabul Ediyorum" expires={15} acceptOnScroll={true} acceptOnScrollPercentage={90} overlay>Bu site çerezleri kullanır. Daha fazlasını öğrenmek için hizmet politikamıza göz at.<a href="/privacy"> Tıklayın.</a></CookieConsent>
        </>
    
    
    );
};


