import React from 'react'
import { styled } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import TikTokIcon from '@mui/icons-material/More'
const FooterContainer = styled('footer')({
	backgroundColor: '#F7F7F7',
	borderTop: '1px solid #DDDDDD',
	padding: '40px 0',
	textAlign: 'center',
	color: '#484848',
	fontSize: '14px',
})

const FooterContent = styled('div')({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'flex-start',
	flexWrap: 'wrap',
})

const FooterColumn = styled('div')({
	flex: '1',
	minWidth: '200px',
	margin: '10px',
})

const FooterHeading = styled('h4')({
	color: '#484848',
	fontSize: '18px',
	marginBottom: '15px',
	fontWeight: 'bold',
})

const FooterLink = styled('a')({
	color: '#484848',
	textDecoration: 'none',
	display: 'block',
	marginBottom: '8px',
	'&:hover': {
		textDecoration: 'underline',
	},
})
const IconWrapper = styled('span')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center', // จัดตำแหน่งจากซ้ายไปขวา
})
const Footer = () => {
	return (
		<FooterContainer>
			<FooterContent>
				<FooterColumn>
					<FooterLink href="#">กฎ กติกาและมารยาท</FooterLink>
					<FooterLink href="#">คำแนะนำการโพสต์</FooterLink>
					<FooterLink href="#">นโยบายเกี่ยวกับข้อมูลส่วนบุคคล</FooterLink>
					<FooterLink href="#">สิทธิ์การใช้งานของสมาชิก</FooterLink>
					<FooterLink href="#">ติดต่อทีมงาน Pantip</FooterLink>
					<FooterLink href="#">ติดต่อลงโฆษณา</FooterLink>
					<FooterLink href="#">ร่วมงานกับ Pantip</FooterLink>
					<FooterLink href="#">Download App Pantip</FooterLink>
					<FooterLink href="#">Pantip Certified Developer</FooterLink>
				</FooterColumn>

				<FooterColumn>
					<FooterHeading>ติดตาม</FooterHeading>
					<FooterLink href="#">
						<IconWrapper>
							<FacebookIcon />
						</IconWrapper>
						Facebook
					</FooterLink>
					<FooterLink href="#">
						<IconWrapper>
							<TwitterIcon />
						</IconWrapper>
						Twitter
					</FooterLink>
					<FooterLink href="#">
						<IconWrapper>
							<YouTubeIcon />
						</IconWrapper>
						YouTube
					</FooterLink>
					<FooterLink href="#">
						<IconWrapper>
							<InstagramIcon />
						</IconWrapper>
						Instagram
					</FooterLink>
					<FooterLink href="#">
						<IconWrapper>
							<TikTokIcon />
						</IconWrapper>
						TikTok
					</FooterLink>
				</FooterColumn>

				<FooterColumn>
					<FooterHeading>เว็บในเครือ</FooterHeading>
					<FooterLink href="#">
						<img
							src="https://pantip.com/static/images/logo-bloggang.png"
							alt="bloggang Logo"
							width={126}
							height={42}
						/>
					</FooterLink>
					<FooterLink href="#">
						<img
							src="https://pantip.com/static/images/logo-maggang.png"
							alt="Maggang Logo"
							width={126}
							height={42}
						/>
					</FooterLink>
					<FooterLink href="#">
						<img
							src="https://pantip.com/static/images/logo-pantown.png"
							alt="pantown Logo"
							width={126}
							height={42}
						/>
					</FooterLink>
					<FooterLink href="#">
						<img
							src="https://pantip.com/static/images/logo-pantipmarket.png"
							alt="pantipmarket Logo"
							width={126}
							height={42}
						/>
					</FooterLink>{' '}
				</FooterColumn>

				<FooterColumn>
					<FooterHeading>ดาวน์โหลดได้แล้ววันนี้</FooterHeading>
					<FooterLink>
						<img
							src="https://pantip.com/static/images/logo-app_pantip.png"
							alt="app_pantip Logo"
							width={64}
							height={64}
						/>
					</FooterLink>{' '}
					<FooterLink href="#">
						<img
							src="https://pantip.com/static/images/button_download-app-store.png"
							alt="app-store Logo"
							width={77}
							height={24}
						/>
					</FooterLink>{' '}
					<FooterLink href="#">
						<img
							src="https://pantip.com/static/images/button_download-google-play.png"
							alt="google-play Logo"
							width={77}
							height={24}
						/>
					</FooterLink>{' '}
					<FooterLink href="#">
						<img
							src="https://ptcdn.info/application/huawei-Black.png"
							alt="huawei-black Logo"
							width={77}
							height={24}
						/>
					</FooterLink>{' '}
				</FooterColumn>
			</FooterContent>

			<div style={{ marginTop: '20px' }}>
				<p>&copy; © 2024 Internet Marketing co., ltd</p>
			</div>
		</FooterContainer>
	)
}

export default Footer
