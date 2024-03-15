import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: 'https://becooon.github.io/JavaScript/Projects/04-Crypto-Coin-App/coin-app/', // Projenizin GitHub Pages'deki yolunu buraya ekleyin
  build: {
    outDir: 'dist', // Oluşturulacak dosyaların çıkış dizini
  },
})
