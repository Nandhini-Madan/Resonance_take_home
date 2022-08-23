import { classNames } from 'lib/utils/classNames'
import { bool, number, string } from 'prop-types'
import { useEffect, useState } from 'react'

export const Logo = ({
  height = 70,
  animate = true,
  color = 'currentColor',
  className,
  ...rest
}) => {
  const [visible, setVisible] = useState(!animate)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
    height={height} 
      viewBox="0 0 405.78 204.34"
      {...rest}
      className={classNames(className, animate && 'grayscale')}>
      <path className={classNames(
        'transition-[opacity,transform] duration-300 ease-ease',
        visible
          ? 'opacity-100 delay-[0.4s] translate-x-0'
          : 'opacity-0 -translate-x-4',
      )}
        d="M16.59,189.8C5.53,180.11,0,166.11,0,147.78V52.45C0,35.27,5.48,22.24,16.44,13.34,27.4,4.45,43.44,0,64.57,0c21.13,0,37.17,4.45,48.13,13.34,10.96,8.89,16.44,21.93,16.44,39.11v95.33c0,18.32-5.53,32.33-16.59,42.02-11.06,9.69-27.05,14.54-47.98,14.54-20.93,0-36.92-4.85-47.98-14.54Zm66.96-26.46c4.02-2.7,6.02-7.16,6.02-13.4V52.11c0-10.11-8.83-15.17-26.51-15.17-15.66,0-23.49,4.94-23.49,14.82v97.95c0,11.78,8.03,17.67,24.1,17.67,9.24,0,15.86-1.35,19.88-4.05Z" />
      <path className={classNames(
          'transition-[opacity,transform] duration-300 ease-ease',
          visible
            ? 'opacity-100 delay-[0.6s] translate-x-0'
            : 'opacity-0 -translate-x-4',
        )}

        d="M282.13,3.58V200.76h-39.52l-52.07-113.5,1.35,58.88v54.62h-44.91V3.58h45.58l46,101.81-1.35-56.54V3.58h44.91Z" />
      <path className={classNames(
        'transition-[opacity,transform] duration-300 ease-ease',
        visible
          ? 'opacity-100 delay-[0.4s] translate-x-0'
          : 'opacity-0 -translate-x-4',
      )}
        d="M302.58,3.58h103.21V43.17h-59.4v39.17h49.79v38.58h-49.79v40.25h59.4v39.59h-103.21V3.58Z" /></svg>
  )
}

Logo.propTypes = {
  height: number,
  animate: bool,
  color: string,
  className: string,
}
