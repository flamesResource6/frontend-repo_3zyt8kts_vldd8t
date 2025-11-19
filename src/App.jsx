import React from 'react'
import Frame from './components/Frame'
import Silhouette from './components/Silhouette'
import GoldCrescent from './components/GoldCrescent'
import Card from './components/Card'
import { IconQuran, IconQibla, IconMosque, IconCrescent } from './components/Icon3D'

function ScreenSplash(){
  return (
    <Frame>
      <div className="absolute inset-0">
        <Silhouette className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[900px]" />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(212,175,55,0.25),transparent_70%)]" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
        <GoldCrescent className="w-44 h-44 mb-6 animate-pulse" />
        <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow">Ummah Pro</h1>
        <p className="mt-2 text-emerald-50/90">A premium spiritual companion</p>
        {/* gold particles */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(24)].map((_,i)=> (
            <span key={i} className="absolute w-1 h-1 rounded-full bg-[#D4AF37] opacity-60" style={{
              left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, filter:'blur(0.5px)'
            }} />
          ))}
        </div>
      </div>
    </Frame>
  )
}

function Onboard({title, subtitle, Icon}){
  return (
    <Frame>
      <div className="absolute inset-0">
        <Silhouette className="absolute top-10 left-1/2 -translate-x-1/2 w-[880px] opacity-50" />
      </div>
      <div className="relative h-full flex flex-col px-6 py-8">
        <div className="flex-1 flex items-center justify-center">
          <Icon className="w-36 h-36" />
        </div>
        <Card className="p-6 mb-4">
          <h2 className="text-xl font-semibold text-[#064E3B]">{title}</h2>
          <p className="text-sm text-emerald-900/80 mt-1">{subtitle}</p>
          <button className="mt-4 w-full bg-emerald-600 text-white rounded-xl py-3 border border-[#D4AF37]/50 shadow hover:bg-emerald-700 transition">Continue</button>
        </Card>
      </div>
    </Frame>
  )
}

function ScreenHome(){
  const tiles = [
    {label:'Quran', icon: IconQuran},
    {label:'Qibla', icon: IconQibla},
    {label:'Ramadan Hub', icon: IconCrescent},
    {label:'Tasbeeh', icon: IconMosque},
    {label:'Duas', icon: IconCrescent},
    {label:'Mosque Finder', icon: IconMosque},
    {label:'DeenBot', icon: IconCrescent},
    {label:'Islamic Calendar', icon: IconCrescent},
  ]
  return (
    <Frame>
      <div className="absolute inset-0">
        <Silhouette className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px]" />
      </div>
      <div className="relative h-full flex flex-col p-6 gap-4">
        {/* Header skyline */}
        <div className="h-28 relative">
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <span className="text-white/90 font-medium">Kaaba</span>
            <span className="text-white/90 font-medium">Madinah</span>
          </div>
          <GoldCrescent className="absolute -top-8 right-0 w-20 h-20" />
        </div>

        {/* Prayer card */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-emerald-900/80">Next Prayer</p>
              <h3 className="text-2xl font-semibold text-[#064E3B]">Asr in 01:23:45</h3>
            </div>
            <IconMosque className="w-12 h-12" />
          </div>
        </Card>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-3 mt-1">
          {tiles.map((t)=> (
            <Card key={t.label} className="p-3 flex flex-col items-center gap-2">
              <t.icon className="w-10 h-10" />
              <span className="text-[11px] text-emerald-900/80 text-center leading-tight">{t.label}</span>
            </Card>
          ))}
        </div>
      </div>
    </Frame>
  )
}

function ScreenPrayerTimes(){
  const times = [
    ['Fajr','05:12'],['Sunrise','06:34'],['Dhuhr','12:21'],['Asr','15:48'],['Maghrib','18:12'],['Isha','19:30']
  ]
  return (
    <Frame>
      <div className="absolute inset-0">
        <Silhouette className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[880px]" />
      </div>
      <div className="relative h-full p-6 flex flex-col gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#064E3B]">Today</h3>
              <p className="text-emerald-900/80 text-sm">Asr in 01:23:12</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button className="px-3 py-1 rounded-lg border border-[#D4AF37]/50">Daily</button>
              <button className="px-3 py-1 rounded-lg border border-transparent/0 bg-emerald-600 text-white">Weekly</button>
              <button className="px-3 py-1 rounded-lg border border-[#D4AF37]/50">Monthly</button>
            </div>
          </div>
        </Card>
        <div className="flex-1 overflow-auto">
          <div className="space-y-3">
            {times.map(([n,t],i)=> (
              <Card key={i} className="p-4 flex items-center justify-between">
                <span className="text-[#064E3B] font-medium">{n}</span>
                <span className="text-emerald-900/80">{t}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}

function ScreenQibla(){
  return (
    <Frame>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-emerald-600/50" />
        <Silhouette className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] opacity-40" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-emerald-900/40 border-4 border-[#D4AF37]/60 shadow-inner flex items-center justify-center">
          <div className="w-56 h-56 rounded-full bg-emerald-800/60 border-2 border-[#E4C667] flex items-center justify-center relative">
            <div className="absolute top-6 w-1/2 h-1 rounded bg-gradient-to-r from-[#E4C667] to-[#D4AF37]"></div>
            <div className="w-10 h-10 bg-black rounded-md border-2 border-[#E4C667]"></div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

function ScreenQuran(){
  const surahs = Array.from({length:12}).map((_,i)=> ({
    n: i+1, name: `Surah ${i+1}`, place: i%2?'Madinah':'Makkah'
  }))
  return (
    <Frame>
      <div className="relative h-full p-6">
        <h2 className="text-white text-xl font-semibold mb-3">Quran</h2>
        <div className="space-y-3">
          {surahs.map(s=> (
            <Card key={s.n} className="p-4 flex items-center justify-between">
              <div>
                <p className="text-[#064E3B] font-semibold">{s.n}. {s.name}</p>
                <p className="text-xs text-emerald-900/80">{s.place}</p>
              </div>
              <button className="px-3 py-1 rounded-lg border border-[#D4AF37]/60 text-sm">Read</button>
            </Card>
          ))}
        </div>
      </div>
    </Frame>
  )
}

function Showcase(){
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Ummah Pro - UI Preview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div>
          <p className="mb-2 text-sm text-white/70">screen_splash</p>
          <ScreenSplash/>
        </div>
        <div>
          <p className="mb-2 text-sm text-white/70">screen_onboard_1</p>
          <Onboard title="Accurate Prayer Times" subtitle="Get precise notifications and beautiful widgets" Icon={IconMosque} />
        </div>
        <div>
          <p className="mb-2 text-sm text-white/70">screen_home</p>
          <ScreenHome/>
        </div>
        <div>
          <p className="mb-2 text-sm text-white/70">screen_prayertimes</p>
          <ScreenPrayerTimes/>
        </div>
        <div>
          <p className="mb-2 text-sm text-white/70">screen_qibla</p>
          <ScreenQibla/>
        </div>
        <div>
          <p className="mb-2 text-sm text-white/70">screen_quran</p>
          <ScreenQuran/>
        </div>
      </div>
    </div>
  )
}

export default Showcase
