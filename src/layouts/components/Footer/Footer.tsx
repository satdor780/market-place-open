import {FC} from "react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
    {
        icon: '/social/instagram.svg',
        dec: 'instagram',
        href: '/',
    },
    {
        icon: '/social/telegram.svg',
        dec: 'telegram',
        href: '/',
    },
    {
        icon: '/social/facebook.svg',
        dec: 'facebook',
        href: '/',
    },
    {
        icon: '/social/youtube.svg',
        dec: 'youtube',
        href: '/',
    }
]


export const Footer: FC = () => {

    return (
        <footer className='flex justify-between pt-20 pb-10 max-lg:flex-wrap max-lg:pt-10 max-lg:pr-20 max-sm:pt-5 max-md:pb-20'>
            <ul className='max-sm:pb-10'>
                <h3 className='font-medium pb-3'>Пользователям</h3>
                <li>
                    <Link href='/public' className='pb-3 block text-[15px] text-gray'>
                        Связаться с нами
                    </Link>
                </li>
                <li>
                    <Link href='/support' className=' block text-[15px] text-gray' >
                        Вопрос - Ответ
                    </Link>
                </li>
            </ul>
            <ul>
                <h3 className='font-medium pb-3'>Служба поддержки</h3>

                <li>
                    <Link href='/support' className='pb-3 block text-[15px] text-gray'>
                        Политика Возврата и Возмещения
                    </Link>
                </li>
                <li>
                    <Link href='/support' className='pb-3 block text-[15px] text-gray'>
                        Политика Интеллектуальной Собственности
                    </Link>
                </li>
                <li>
                    <Link href='/support'  className='block text-[15px] text-gray'>
                        Сообщить о подозрительной активности
                    </Link>
                </li>
            </ul>
            <ul className='pr-10 max-lg:w-full max-lg:flex max-lg:gap-10 max-lg:pr-0 max-lg:pt-10 max-xs:flex-wrap max-xs:gap-5'>
                <li>
                    <h3 className='font-medium pb-3'>Скачать приложение</h3>
                    <ul className="list-none">
                        <li>
                            <Link href='/public' className="flex gap-2 items-center pb-3 font-medium">
                                <Image
                                    src='/social/appStore.svg'
                                    alt='app store'
                                    width={28}
                                    height={28}
                                    className='mr-2'
                                />
                                AppStore
                            </Link>
                        </li>
                        <li>
                            <Link href='/public' className="flex gap-2 items-center font-medium">
                                <Image
                                    src='/social/playMarket.svg'
                                    alt='google play market'
                                    width={36}
                                    height={36}
                                />
                                Google Play
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className='pt-10 max-lg:pt-0'>
                    <h3 className='font-medium pb-3'>Maverick в соцсетях</h3>
                    <ul className="flex gap-3">
                        {socialLinks.map((social) => (
                            <li key={social.dec}>
                                <Link href={social.href}>
                                    <Image
                                        src={social.icon}
                                        alt={social.dec}
                                        width={36}
                                        height={36}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </footer>
    )
}
