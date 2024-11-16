
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
const HomeLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <header className='mt-10 space-y-3'>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>

            </nav>
            <main>

            </main>
        </div>
    );
};

export default HomeLayout;