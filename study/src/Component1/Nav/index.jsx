import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi'
import NavItem from './NavItem'
const defaultIconSize = '1.875rem';
const items = [
	{ label: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, active: true },
	{ label: 'Movies', icon: <BiMoviePlay size={defaultIconSize} /> },
	{ label: 'About', icon: <BiInfoCircle size={defaultIconSize} /> }
]
const NavItemsContainer = () => (
	<>	
		{items.map((item, index) => (
			<NavItem item={item} key={index} />
		))}
	</>
)
const Nav = () => {
	return (
		<nav className='col-span-1 bg-cyan-200'>
			<div className='flex mx-4 justify-between items-center md:block'>
				<h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>
					Phimmoi.net
				</h4>
				<BiMenu
					className='cursor-pointer md:hidden'
					size={defaultIconSize}
				/>
			</div>
			<ul
				className='mx-4 my-2'
			>
				<NavItemsContainer />
			</ul>
		</nav>
	)
}
export default Nav