import { User } from 'lucide-react'
import Image from 'next/image'
import NlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-1 flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>

        {/* Sign-in */}
        <div>
          <a href="" className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
              <User className="aspect-square h-5 w-5 text-gray-500"></User>
            </div>

            <p className="text-sm leading-snug">
              <span className="underline transition-colors hover:text-gray-50">
                Crie sua conta
              </span>{' '}
              e salve suas memórias!
            </p>
          </a>
        </div>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={NlwLogo} alt="NLW SpaceTime" />

          <div className="max-w-[400px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>

          <a
            href="#"
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
          >
            <button className="uppercase">Cadastrar Lembrança</button>
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm leading-relaxed text-gray-200">
            Feito com 💜 no NLW da{' '}
            <a
              className="underline transition-colors hover:text-gray-50"
              target="_blank"
              href="https://rocketseat.com.br"
              rel="noreferrer"
            >
              Rocketseat
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Message */}
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a
              href=""
              className="underline transition-colors hover:text-gray-50"
            >
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
