import { storesContext } from '@renderer/contexts/stores-context'
import { useContext } from 'react'

export const useStores = () => useContext(storesContext)
