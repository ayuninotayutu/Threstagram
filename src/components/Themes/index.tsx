import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { Icon } from '@iconify/react';

import { useThemes } from '../../context/ThemesContext';
import { useOptions } from '../../context/OptionsContext';

const Themes = () => {
  const { themesState, dispatchThemes } = useThemes();
  const { optionsState, dispatchOptions } = useOptions();

  const [theme, setTheme] = useState<'light' | 'dark'>(themesState.theme);

  const optionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleThemeChange(theme);
  }, []);

  const handleThemeChange = (value: 'light' | 'dark') => {
    let position: number;
    if (value === 'dark') {
      position = 0;
    } else if (value === 'light') {
      position = 60;
    }
    optionRef.current.style.left = position + 'px';
    setTheme(value);
  };

  return (
    <section className='w-full'>
      <div className='flex justify-between items-center'>
        <p className='text-xl font-semibold'>
          {theme === 'dark' ? 'Dark' : 'Light'} Themes
        </p>

        <div className='relative flex h-[30px] border justify-between rounded-lg bg-zinc-900 border-secondary'>
          <div
            className='w-[60px] top-0 absolute h-full p-1 -z-0 transition-all'
            style={{ left: '60px' }}
            ref={optionRef}
          >
            <div
              className='w-full h-full bg-white rounded-lg'
              style={{
                background:
                  'linear-gradient(to right, #fffafe, #feffe4, #fbeeff, #e8fdff, #ffeff8, #edf8ff)',
              }}
            />
          </div>
          <span
            className={`w-[60px] flex items-center justify-center z-10 font-medium cursor-pointer ${
              theme === 'dark' ? 'text-primary' : 'text-secondary'
            }`}
            onClick={() => handleThemeChange('dark')}
          >
            Dark
          </span>
          <span
            className={`w-[60px] flex items-center justify-center z-10 font-medium cursor-pointer ${
              theme === 'dark' ? 'text-secondary' : 'text-primary'
            }`}
            onClick={() => handleThemeChange('light')}
          >
            Light
          </span>
        </div>
      </div>
      {theme === 'light' && (
        <section className='flex gap-2 w-full snap-x snap-mandatory overflow-x-scroll'>
          {/* Default Light */}
          <div
            className='cursor-pointer min-w-[140px] max-w-[140px] w-[140px]'
            onClick={() => {
              dispatchThemes({
                type: 'CHANGE_THEME',
                payload: {
                  themeName: 'defaultLight',
                  theme: 'light',
                },
              });
              dispatchOptions({ type: 'SET_COLOR1', payload: '#1a8fbb' });
            }}
          >
            <div
              className={`min-h-[162.5px] max-h-[162.5px] h-[162.5px] w-full flex justify-between flex-col px-4 py-2 snap-center overflow-y-scroll rounded-md bg-brand text-secondary`}
              id='card-container'
            >
              <div className='text-fmd font-semibold w-full h-[10%]'>1</div>
              <div
                className={`h-[80%] flex items-center whitespace-pre-line md:text-sm text-xs`}
                style={{
                  wordBreak: 'break-word',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                recusandae, iusto nam, odio vero reprehenderit dolores deleniti
              </div>

              <div className='flex gap-1 items-center h-[10%]'>
                <span className='h-full flex items-center'>
                  <div className='h-4 w-4 rounded-full relative overflow-hidden border-2 border-secondary  border-spacing-6'>
                    <Image
                      src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
                      alt='profile_user_default'
                      quality={100}
                      fill
                      className='object-cover'
                    />
                  </div>
                </span>
                <p className='text-fxs font-medium text-center h-full flex items-center'>
                  <span>@Mark_zucky</span>
                </p>
              </div>
            </div>
            <p className='text-center'>Default Light</p>
          </div>
        </section>
      )}
      {theme === 'dark' && (
        <section>
          {/* Default Dark */}
          <div
            className='cursor-pointer min-w-[140px] max-w-[140px] w-[140px]'
            onClick={() => {
              dispatchThemes({
                type: 'CHANGE_THEME',
                payload: {
                  themeName: 'defaultDark',
                  theme: 'dark',
                },
              });
              dispatchOptions({ type: 'SET_COLOR1', payload: '#060b0a' });
            }}
          >
            <div
              className={`min-h-[162.5px] max-h-[162.5px] h-[162.5px] w-full flex justify-between flex-col px-4 py-2 snap-center overflow-y-scroll rounded-md bg-primary text-secondary`}
              id='card-container'
            >
              <div className='h-[10%] w-full flex justify-between'>
                <div className='flex gap-1 items-center relative'>
                  <div className='max-h-6 max-w-6 h-6 w-6 rounded-full relative overflow-hidden border-2 border-secondary border-spacing-6 z-10'>
                    <Image
                      src='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
                      alt='profile_user_default'
                      quality={100}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <p className='text-[6px] font-medium text-center h-full flex items-center border-2 border-secondary rounded-full px-2 absolute left-3'>
                    <span>@Mark_zucky</span>
                  </p>
                </div>
                <span className='text-f2xs font-semibold'>1/5</span>
              </div>
              <div
                className={`h-[80%] flex items-center whitespace-pre-line md:text-sm text-[10px] text-center`}
                style={{
                  wordBreak: 'break-word',
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                recusandae, iusto name
              </div>
              <div className='min-h-[10%] w-full flex justify-end'>
                <div className='flex items-center'>
                  <span className='h-8 w-8 rounded-full p-2 border-secondary border-2 relative left-4 bg-primary flex justify-center items-center'>
                    <Icon
                      icon='material-symbols:swipe-down-rounded'
                      className='text-secondary h-7 w-7'
                    />
                  </span>
                  <p className='text-[8px] rounded-full border-2 border-secondary flex items-center px-4 text-center'>
                    <span>Swipe</span>
                  </p>
                </div>
              </div>
            </div>
            <p className='text-center'>Default Dark</p>
          </div>
        </section>
      )}
    </section>
  );
};

export default Themes;
