import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='font-lexend-deca border-8 border-red-500 h-[100vh] w-[100vw]'>
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold">Logo</div>
          <div>
            <Link to="/" className="px-3 py-2 hover:bg-blue-700 rounded">Home</Link>
            <Link to="/about" className="px-3 py-2 hover:bg-blue-700 rounded">About</Link>
            <Link to="/contact" className="px-3 py-2 hover:bg-blue-700 rounded">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="p-4">
        <h1 className="text-4xl font-bold font-lexend-deca">Halaman Beranda</h1>
        <p>Selamat datang di halaman beranda aplikasi kami.</p>
      </div>
    </div>
  );
}

export default Home;
