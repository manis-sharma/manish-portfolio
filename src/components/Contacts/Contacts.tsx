import { links } from '@/layouts/Hero/links'
import Dna from '../shared/ui/Dna/Dna'
import { MediaLinks } from '../ui/MediaLinks/MediaLinks'
import styles from './Contacts.module.scss'

export default function Contacts() {
	return (
		<>
			<Dna light />
			<section className={styles.contacts}>
				<div className={styles.container}>
					<div className={styles.upper}>
						<h1>
							Let&apos;s get <span>in touch</span>
						</h1>

						<div className={styles.icons}>
							<MediaLinks items={links} />
						</div>
					</div>

					<p>MANISH SHARMA 2025</p>
				</div>
			</section>
		</>
	)
}
