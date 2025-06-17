import ProductCard from '../components/ProductCard';
import { lista } from '../components/ProductListing';

import '../css/spacing.css';

export default function ProductViewPage() {
    return (
        <div className='bg-gray-50 text-gray-900 font-sans'>
            <main className='max-w-7x1 mx-auto spacing-px-md spacing-my-lg'>
                <div className='flex flex-col md:flex-row gap-8 spacing-my-md'>
                    <div className='flex-1'>
                        <img 
                            src='/src/public/product-images/tenis5.jpg'
                            alt='Tênis principal'
                            className='rounded-x1 shadow-md'
                        />
                        <div className='flex justify-between gap-2 spacing-mt-md'>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <img 
                                    key={i}
                                    src={`/img/thum-${i}.jpg`}
                                    alt={`Thumbnail ${i}`}
                                    className='w-16 h-16 object-cover rounded border cursor-pointer hover:border-pink-500 text-sm'
                                />
                            ))}
                        </div>
                    </div>

                    {/* Detalhes do produto */}
                    <div className='flex-1'>
                        <h1 className='text-2x1 font-bold leading-snug'>
                            Tênis Nike Revolution 6 Next Nature Masculino
                        </h1>
                        <p className='text-sm text-gray-500 spacing-mt-sm'>Cód: 123</p>
                        <div className='flex items-center gap-2 spacing-mt-sm'>
                            <span className='bg-yellow-300 px-2 py-0.5 rounded text-sm font-medium'>4.7</span>
                            <span className='text-gray-500 text-sm'>(200 avaliações)</span>
                        </div>

                        <p className='text-2x1 text-pink-600 font-bold mt-4'>R$ 219,00</p>
                        <p className='text-sm text-gray-700 mt-3'>Descrição detalhada do produto vai aqui.</p>

                        {/* Tamanhos */}
                        <div className='spacing-mt-md'>
                            <label className='block text-sm font-medium spacing-mb-sm'>Tamanho</label>
                            <div className='flex gap-2'>
                                {[36, 38, 40, 42, 44].map((size) => (
                                    <button 
                                        key={size}
                                        className='border rounded px-3 py-1 hover:border-pink-500 text-sm'
                                    > {size} 
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Cores */}
                        <div className='spacing-mt-md'>
                            <label className='block text-sm font-medium spacing-mb-sm'>Cor</label>
                            <div className='flex gap-2'>
                                <span className="w-6 h-6 rounded-full bg-pink-500 border cursor-pointer" />
                                <span className="w-6 h-6 rounded-full bg-gray-700 border cursor-pointer" />
                                <span className="w-6 h-6 rounded-full bg-indigo-600 border cursor-pointer" />
                            </div>
                        </div>

                        <button className='bg-orange-400 hover:bg-orange-500 text-white font-medium px-6 py-2 rounded spacing-mt-lg'>COMPRAR</button>
                    </div>
                </div>

                {/* Produtos Relacionados */}
                <section className='spacing-my-lg'>
                    <div className='flex justify-between items-center spacing-mb-md'>
                        <h2 className='text-pink-500 text-sm'>
                            Produtos Relacionados
                        </h2>
                        <a href='#' className='text-pink-500 text-sm'>Ver todos</a>
                    </div>
                    <ProductCard lista={lista.slice(0, 4)} />
                </section>
            </main>
        </div>
    );
}
