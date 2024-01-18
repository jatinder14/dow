import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


export const countAtom = atom({
    key: 'countAtom',
    default : 0
})