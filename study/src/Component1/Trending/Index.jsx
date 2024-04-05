import MovieCard from './MovieCard'
import { moviesData } from './moviesData'

const Index = () => {
	return (
		<>
			<h3 className='border-b border-primary mt-12 mb-6 pb-4'>Trending</h3>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-12'>
				{moviesData.map((movie, index) => (//dòng này mình không nói là duyệt tại quen mồm .-.
				//cho nên mình tạm gọi là liệt kê từng cái movie cũng như là src,runtime,... ra nhá
					<MovieCard key={index} movie={movie} />
				))}
				{/* mình xin nhắc lại đây cũng là biểu tượng của map rất hay dùng luôn */}
			</div>
			<div className='flex justify-center'>
				<button className='btn hover:scale-125 transition ease-out duration-500'>
					Load more
				</button>
			</div>
		</>
	)
}

export default Index