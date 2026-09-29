import { useState } from 'react'

const STEPS = [1, 5, 10]

export default function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const tone = 'text-yellow-500 dark:text-yellow-400'

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 shadow-xl ring-1 ring-slate-200 dark:ring-slate-800 p-8 space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Counter</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">React + Vite + Tailwind CSS</p>
        </header>

        <div className="flex items-center justify-center gap-3">
          <span
            className={`tabular-nums text-6xl font-bold tracking-tight transition-colors ${tone}`}
            data-testid="count"
          >
            {count}
          </span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setCount((c) => c - step)}
            className="flex-1 h-12 rounded-xl text-lg font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition dark:text-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer"
          >
            −
          </button>
          <button
            type="button"
            onClick={() => setCount(0)}
            className="h-12 px-4 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 active:scale-95 transition dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => setCount((c) => c + step)}
            className="flex-1 h-12 rounded-xl text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition shadow cursor-pointer"
          >
            +
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="text-xs uppercase tracking-wide text-slate-400 mr-1">Step</span>
          {STEPS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStep(s)}
              className={`w-10 h-8 rounded-lg text-sm font-medium transition cursor-pointer ${
                step === s
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}
