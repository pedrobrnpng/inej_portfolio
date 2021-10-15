import {useMedia } from 'react-use'

export default function useIsMobile () {
  const isMobile = useMedia('(max-width: 1150px)');
  return isMobile;
}