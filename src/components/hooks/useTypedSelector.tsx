
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { RootState } from '../../store/reeducers'

export const useTypedSelector:TypedUseSelectorHook<RootState>=useSelector