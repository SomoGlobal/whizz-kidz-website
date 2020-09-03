import cx from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useCycle,
  useReducedMotion,
} from 'framer-motion';

import { brands } from '../../lib/brand-context';
import GridTile from '../grid-tile';
import IconButton from '../icon-button';

import styles from './full-page-sitemap.module.css';

export interface INavItem {
  id: string;
  label: string;
  type: string;
  children: INavChild[];
  linkProps: ILinkProps;
  brand: string;
}

export interface INavChild {
  label: string;
  href: string;
}

export interface ILinkProps {
  href: string;
}

const FullPageSitemap: React.FC<{ links: INavItem[] }> = ({ links }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState(null);
  const [isOpen, setOpen] = useState(false);

  const open = () => {
    setOpen(true);
    setActiveCategory(null);
  };

  const close = () => {
    setActiveCategory(null);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        className="text-gray-800 hover:bg-gray-200"
        type="menu"
        onClick={() => open()}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { y: '-100%' }}
            animate={shouldReduceMotion ? { opacity: 1 } : { y: '0%' }}
            exit={shouldReduceMotion ? { opacity: 0 } : { y: '-100%' }}
            transition={{ duration: 0.5 }}
            aria-labeledby="nav-modal"
            role="dialog"
            aria-modal="true"
            className="fixed top-0 left-0 w-screen h-screen overflow-contain"
            style={{ zIndex: 99999 }}
          >
            <section className="relative flex flex-col h-full mx-auto text-white bg-gray-200 shadow-2xl xl:container">
              <AnimateSharedLayout type="switch">
                <div className="z-50 flex items-center justify-end px-4 py-2 text-gray-800 bg-white">
                  <div className="flex-1">
                    <h1
                      id="nav-modal"
                      className="inline px-4 py-3 text-3xl font-bold bg-white clone"
                    >
                      Navigation
                    </h1>
                  </div>
                  <IconButton
                    type="close"
                    onClick={() => close()}
                    className="hover:bg-gray-200"
                  />
                </div>
                <motion.ul
                  className="grid flex-1 grid-cols-1 gap-1 sm:grid-cols-2 sm:grid-flow-col sm:grid-rows-4"
                  aria-label="Navigation Category"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        when: 'beforeChildren',
                        staggerChildren: 0.025,
                      },
                    },
                    hidden: {
                      opacity: 0,
                      transition: {
                        when: 'afterChildren',
                      },
                    },
                  }}
                >
                  {links.map((link, index) => (
                    <motion.li
                      key={link.id}
                      className={index === 0 ? 'sm:col-span-2' : ''}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -40 },
                      }}
                    >
                      {link.type === 'category' && (
                        <motion.button
                          layoutId={link.id}
                          type="button"
                          onClick={() => setActiveCategory(link)}
                          className={cx(
                            'p-8 text-left text-2xl sm:text-3xl md:text-5xl font-bold block w-full hover:underline h-full',
                            `${
                              brands[link.brand || 'default'].backgroundColor
                            }`,
                            styles.categoryButton
                          )}
                        >
                          <span className="px-4 py-3">{link.label}</span>
                        </motion.button>
                      )}
                      {link.type === 'link' && (
                        <Link {...link.linkProps}>
                          <a
                            onClick={() => close()}
                            className={cx(
                              'p-8 text-left text-2xl sm:text-3xl md:text-5xl font-bold flex items-center w-full hover:underline h-full block',
                              `${
                                brands[link.brand || 'default'].backgroundColor
                              }`,
                              styles.categoryButton
                            )}
                          >
                            <span className="px-4 py-3">{link.label}</span>
                          </a>
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
                <AnimatePresence>
                  {activeCategory && (
                    <motion.section
                      style={{ zIndex: 1000 }}
                      initial={{ opacity: shouldReduceMotion ? 0 : 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: shouldReduceMotion ? 0 : 1 }}
                      className={cx(
                        `${
                          brands[activeCategory.brand || 'default']
                            .backgroundColor
                        }`,
                        'fixed top-0 h-screen w-screen overscroll-contain xl:container mx-auto overflow-scroll'
                      )}
                      layoutId={shouldReduceMotion ? false : activeCategory.id}
                    >
                      <motion.div
                        className={cx(
                          'sticky top-0 py-2 px-4 flex items-center text-gray-800 z-50',
                          activeCategory.background
                        )}
                      >
                        <IconButton
                          type="back"
                          className="text-white"
                          onClick={() => setActiveCategory(null)}
                        />
                        <div className="flex-1 ml-4">
                          <motion.h1
                            className="inline px-4 py-3 text-3xl font-bold bg-white clone"
                            layoutId="catLabel"
                          >
                            {activeCategory.label}
                          </motion.h1>
                        </div>
                        <IconButton
                          type="close"
                          className="text-white"
                          onClick={() => setActiveCategory(null)}
                        />
                      </motion.div>
                      <motion.ul
                        aria-label="pages"
                        className="z-10"
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {activeCategory.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href}>
                              <a
                                onClick={() => close()}
                                className={cx(
                                  'px-8 py-4 text-2xl font-bold block w-full text-left hover:underline'
                                )}
                              >
                                {child.label}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </motion.section>
                  )}
                </AnimatePresence>
              </AnimateSharedLayout>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullPageSitemap;
