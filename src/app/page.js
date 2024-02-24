'use client'

import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import { Input } from '@mui/material'
import Divider from '@mui/material/Divider'
import HomeIcon from '@mui/icons-material/Home'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import ExploreIcon from '@mui/icons-material/Explore'
import PointsIcon from '@mui/icons-material/Star'
import EventIcon from '@mui/icons-material/Event'
import RoomIcon from '@mui/icons-material/Room'
import Footer from './component/footer'
const pages = [
	{ text: 'หน้าแรก', icon: <HomeIcon /> },
	{ text: 'My Feed', icon: <RssFeedIcon /> },
	{ text: 'Pantip Pick', icon: <ThumbUpAltIcon /> },
	{ text: 'PantipHitz', icon: <WhatshotIcon /> },
	{ text: 'Explore', icon: <ExploreIcon /> },
	{ text: 'แลกพอยต์', icon: <PointsIcon /> },
	{ text: 'กิจกรรมพันทิป', icon: <EventIcon /> },
]
const settings = ['ลงทะเบียน', 'เข้าสู่ระบบ']

const rooms = [
	{ name: 'ซิลิคอนวัลเลย์', icon: <RoomIcon />, link: '/general' },
	{ name: 'สินธร', icon: <RoomIcon />, link: '/photos' },
	{ name: 'หว้าก้อ', icon: <RoomIcon />, link: '/music' },
	{ name: 'มาบุญครอง', icon: <RoomIcon />, link: '/music' },
	{ name: 'ชานเรือน', icon: <RoomIcon />, link: '/music' },
	{ name: 'สยามสแคว์', icon: <RoomIcon />, link: '/music' },
	{ name: 'จตุจักร', icon: <RoomIcon />, link: '/music' },
	{ name: 'ไร้สังกัด', icon: <RoomIcon />, link: '/music' },
	{ name: 'โตีะเครื่องแป้ง', icon: <RoomIcon />, link: '/music' },
	{ name: 'ชายตา', icon: <RoomIcon />, link: '/music' },
	{ name: 'แกลลอรี่', icon: <RoomIcon />, link: '/music' },
	{ name: 'เฉลิมไทย', icon: <RoomIcon />, link: '/music' },
	{ name: 'รวมมิตร', icon: <RoomIcon />, link: '/general' },
	{ name: 'รัชดา', icon: <RoomIcon />, link: '/photos' },
	{ name: 'ศาสนา', icon: <RoomIcon />, link: '/music' },
	{ name: 'ไกลบ้าน', icon: <RoomIcon />, link: '/music' },
	{ name: 'ดิโอลด์สยาม', icon: <RoomIcon />, link: '/music' },
	{ name: 'กล้อง', icon: <RoomIcon />, link: '/music' },
	{ name: 'พันทิป', icon: <RoomIcon />, link: '/music' },
	{ name: 'หอศิลป์', icon: <RoomIcon />, link: '/music' },
	{ name: 'บางขุนพรหม', icon: <RoomIcon />, link: '/music' },
	{ name: 'กันครัว', icon: <RoomIcon />, link: '/music' },
	{ name: 'เฉลิมกรุง', icon: <RoomIcon />, link: '/music' },
	{ name: 'ถนนนักเขียน', icon: <RoomIcon />, link: '/music' },
]
const Highlight = [
	{
		name: '[Pantip Point] วาเลนไทน์นี้ อยากควงน้องเพี้ยนไปเดต',
		image:
			'https://ptcdn.info/home_highlight/2024-02/65baf030caac0adc231bc234_xjan2zswpr_400.png',
		link: '/general',
	},
	{
		name: 'Pantip Pick of the Year 2023 - รวม 10 สุดยอดกระทู้',
		image:
			'https://ptcdn.info/home_highlight/2023-12/657823e0caac0aaaeb7ce7f6_t8aa9deoj4_400.png',
		link: '/photos',
	},
	{
		name: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิป',
		image:
			'https://ptcdn.info/home_highlight/2022-10/633b8e4a00d01f12500f33e6_hvzb60o1p0_400.jpg',
		link: '/photos',
	},
	{
		name: 'สถานที่ท่องเที่ยวสุดโรแมนติกของคุณคือ … ❤ แชร์มาเลย',
		image:
			'https://ptcdn.info/home_highlight/2024-02/65c59435caac0a92b32617a4_kru3nl32ta_400.jpg',
		link: '/photos',
	},
]
export default function Home() {
	const [anchorElNav, setAnchorElNav] = useState(null)
	const [anchorElUser, setAnchorElUser] = useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<Box sx={{ flexGrow: 1, background: '#3c3963', color: '#fff', }}>
			<Grid
				container
				spacing={2}
				sx={{ justifyContent: 'space-between', padding: '20px 80px' }}
			>
				<Grid item>
					<img
						/* 						sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
						 */ src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png"
						alt="Pantip Logo"
						width={118}
						height={64}
					/>
				</Grid>
				<Grid item sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
					<Typography variant="h6" gutterBottom>
						ตั้งกระทู้
					</Typography>
					<Typography variant="h6" gutterBottom>
						คอมมูนิตี้
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
					</Box>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Grid>

				<Grid item xs={12}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							borderRadius: '40px',
							p: 2,
							margin: 'auto',
							maxWidth: '800px',
							boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
							backgroundColor: '#44416f',
						}}
					>
						<InputBase
							placeholder="ค้นหาบน pantip"
							inputProps={{ 'aria-label': 'search' }}
							sx={{ ml: 1, flex: 1, fontSize: '20px', color: '#fff' }}
						/>
						<SearchIcon
							sx={{
								p: 2,
								color: '#fff',
								cursor: 'pointer',
								backgroundColor: '#2d2a49',
								borderRadius: '40px',
								':hover': {
									backgroundColor: '#1f1d33',
								},
							}}
						/>
					</Box>
					<Divider sx={{ margin: '30px' }} />
					<Grid item xs={12}>
						<Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
							{pages.map((page, index) => (
								<Box
									key={index}
									textAlign="center"
									p={2}
									sx={{
										cursor: 'pointer',
										':hover': {
											color: '#1f1d33',
										},
									}}
								>
									{page.icon}
									<Typography>{page.text}</Typography>
								</Box>
							))}
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ marginTop: '30px' }}>
						<Box sx={{ border: '1px solid #5F6769', borderRadius: '10px' }}>
							<Typography
								variant="h5"
								sx={{
									backgroundColor: '#1f1d33',
									color: '#fbc02d',
									p: '20px',
									borderRadius: '10px 10px 0 0',
								}}
							>
								Announce
							</Typography>

							<MenuItem
								value={30}
								sx={{
									backgroundColor: '#353156',
									color: '#fff',
									p: '10px',
									borderTop: '1px solid #5F6769',
								}}
							>
								<Typography variant="h6" sx={{ color: '#fbc02d ' }}>
									🎧 Pantip Daily Podcast 🎧
								</Typography>
								3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 15 กุมภาพันธ์ 📊
							</MenuItem>
							<MenuItem
								value={3}
								sx={{
									backgroundColor: '#353156',
									color: '#fff',
									borderTop: '1px solid #5F6769',
									borderRadius: '0 0 10px 10px',
								}}
							>
								<Typography variant="h6" sx={{ color: '#fbc02d ' }}>
									Pantip Point 💰
								</Typography>{' '}
								วาเลนไทน์นี้ อยากควงน้องเพี้ยนไปเดตที่ไหนดี ? 💕🥰
							</MenuItem>
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ marginTop: '30px' }}>
						<Box
							sx={{
								border: '1px solid #5F6769',
								borderRadius: '10px',
								overflow: 'hidden',
							}}
						>
							<Typography
								variant="h5"
								sx={{ backgroundColor: '#1f1d33', color: '#fbc02d', p: '20px' }}
							>
								เลือกห้อง
							</Typography>
							<Grid container sx={{ alignItems: 'center' }}>
								{rooms.map((room, index) => (
									<Grid
										item
										key={index}
										xs={3}
										md={2}
										lg={1}
										sx={{
											textAlign: 'center',
											border: '1px solid #5F6769',
											height: '100px',
											backgroundColor: '#353156',
											':hover': {
												backgroundColor: '#1f1d33',
											},
											cursor: 'pointer',
										}}
									>
										<IconButton
											component="a"
											href={room.link}
											target="_blank"
											rel="noopener noreferrer"
											sx={{ fontSize: '24px', color: '#fff' }}
										>
											{room.icon}
										</IconButton>
										<Typography>{room.name}</Typography>
									</Grid>
								))}
							</Grid>
						</Box>
					</Grid>
					<Grid item xs={12} sx={{ marginTop: '30px' }}>
						<Box
							sx={{
								border: '1px solid #5F6769',
								borderRadius: '10px',
								overflow: 'hidden',
							}}
						>
							<Typography
								variant="h5"
								sx={{
									backgroundColor: '#1f1d33',
									color: '#fbc02d',
									p: '20px',
								}}
							>
								Highlight
							</Typography>
							<Grid container sx={{ alignItems: 'center' }}>
								{Highlight.map((highlight, index) => (
									<Grid
										item
										key={index}
										xs={6}
										md={6}
										lg={3}
										sx={{
											border: '1px solid #5F6769',
											backgroundColor: '#353156',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											padding: '20px',
										}}
									>
										<IconButton
											component="a"
											href={highlight.link}
											target="_blank"
											rel="noopener noreferrer"
											sx={{ fontSize: '24px', color: '#fff' }}
										>
											<img
												src={highlight.image}
												alt={highlight.name}
												style={{
													width: '300px',
													height: '250px',
												}}
											/>
										</IconButton>
										<Typography
											sx={{
												color: '#fff',
												width: '300px',
												':hover': {
													backgroundColor: '#1f1d33',
												},
												cursor: 'pointer',
											}}
										>
											{highlight.name}
										</Typography>
									</Grid>
								))}
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Grid>
      <Footer />

		</Box>
	)
}
