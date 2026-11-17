import type { Coffee } from '@/types/coffee'
import arabe from '@/assets/coffees/arabe.svg'
import cafeComLeite from '@/assets/coffees/cafe-com-leite.svg'
import capuccino from '@/assets/coffees/capuccino.svg'
import chocolateQuente from '@/assets/coffees/chocolate-quente.svg'
import cubano from '@/assets/coffees/cubano.svg'
import expressoAmericano from '@/assets/coffees/expresso-americano.svg'
import expressoCremoso from '@/assets/coffees/expresso-cremoso.svg'
import expressoGelado from '@/assets/coffees/expresso-gelado.svg'
import expressoTradicional from '@/assets/coffees/expresso-tradicional.svg'
import havaiano from '@/assets/coffees/havaiano.svg'
import irlandes from '@/assets/coffees/irlandes.svg'
import latte from '@/assets/coffees/latte.svg'
import macchiato from '@/assets/coffees/macchiato.svg'
import mocaccino from '@/assets/coffees/mocaccino.svg'

/**
 * Catálogo local e tipado (RN-08). Preços em centavos inteiros (RN-04).
 * Ilustrações SVG originais geradas para o projeto (DP-06).
 */
export const coffees: readonly Coffee[] = [
  {
    id: 'expresso-tradicional',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 990,
    image: expressoTradicional,
    tags: ['Tradicional'],
    category: 'traditional',
  },
  {
    id: 'expresso-americano',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    priceInCents: 990,
    image: expressoAmericano,
    tags: ['Tradicional'],
    category: 'traditional',
  },
  {
    id: 'expresso-cremoso',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    priceInCents: 1090,
    image: expressoCremoso,
    tags: ['Tradicional'],
    category: 'traditional',
  },
  {
    id: 'expresso-gelado',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    priceInCents: 1190,
    image: expressoGelado,
    tags: ['Tradicional', 'Gelado'],
    category: 'iced',
  },
  {
    id: 'cafe-com-leite',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    priceInCents: 1090,
    image: cafeComLeite,
    tags: ['Tradicional', 'Com leite'],
    category: 'with-milk',
  },
  {
    id: 'latte',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    priceInCents: 1290,
    image: latte,
    tags: ['Tradicional', 'Com leite'],
    category: 'with-milk',
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 1290,
    image: capuccino,
    tags: ['Tradicional', 'Com leite'],
    category: 'with-milk',
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    priceInCents: 1190,
    image: macchiato,
    tags: ['Tradicional', 'Com leite'],
    category: 'with-milk',
  },
  {
    id: 'mocaccino',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    priceInCents: 1390,
    image: mocaccino,
    tags: ['Tradicional', 'Com leite'],
    category: 'with-milk',
  },
  {
    id: 'chocolate-quente',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    priceInCents: 1390,
    image: chocolateQuente,
    tags: ['Especial', 'Com leite'],
    category: 'special',
  },
  {
    id: 'cubano',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceInCents: 1590,
    image: cubano,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    category: 'alcoholic',
  },
  {
    id: 'havaiano',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    priceInCents: 1490,
    image: havaiano,
    tags: ['Especial'],
    category: 'special',
  },
  {
    id: 'arabe',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    priceInCents: 1490,
    image: arabe,
    tags: ['Especial'],
    category: 'special',
  },
  {
    id: 'irlandes',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    priceInCents: 1690,
    image: irlandes,
    tags: ['Especial', 'Alcoólico'],
    category: 'alcoholic',
  },
]

const coffeesById: ReadonlyMap<string, Coffee> = new Map(coffees.map((coffee) => [coffee.id, coffee]))

export function findCoffeeById(id: string): Coffee | undefined {
  return coffeesById.get(id)
}
