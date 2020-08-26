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

const sampleLinks = [
  { href: '/link-1', label: 'Link 1' },
  { href: '/link-2', label: 'Link 2' },
  { href: '/link-3', label: 'Link 3' },
  { href: '/link-4', label: 'Link 4' },
  { href: '/link-5', label: 'Link 5' },
];

const menu = [
  {
    id: '0',
    label: 'Home',
    type: 'link',
    linkProps: { href: '/' },
    background: brands.home.backgroundColor,
  },
  {
    id: '1',
    label: 'Kidz',
    type: 'category',
    children: [
      { label: 'Kidz Home', href: '/kidz' },
      { label: 'Young People’s Services', href: '/kidz/yps' },
      { label: 'Meet the kidz', href: '/kidz/meet-the-kidz' },
    ],
    background: brands.kidz.backgroundColor,
  },
  {
    id: '2',
    label: 'Families',
    type: 'category',
    children: [
      { label: 'Families Home', href: '/families' },
      { label: 'Equipment We Offer', href: '/families/equipment' },
      { label: 'Services', href: '/families/services' },
    ],
    background: brands.families.backgroundColor,
  },
  {
    id: '3',
    label: 'Supporters',
    type: 'category',
    children: sampleLinks,
    background: brands.supporters.backgroundColor,
  },
  {
    id: '4',
    label: 'Discover',
    type: 'category',
    children: sampleLinks,
    background: brands.discover.backgroundColor,
  },
  {
    id: '5',
    label: 'The Charity',
    type: 'category',
    children: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact', href: '/contact' },
    ],
    background: 'bg-yellow-600',
  },
  {
    id: '6',
    label: 'Website Policies',
    type: 'category',
    children: [
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms and Conditions', href: '/terms' },
    ],
    background: brands.default.backgroundColor,
  },
];

const FullPageSitemap: React.FC = () => {
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
                <div className="sticky top-0 z-50 flex items-center justify-end px-4 py-2 text-gray-800 bg-white">
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
                  {menu.map((cat, index) => (
                    <motion.li
                      key={cat.id}
                      className={index === 0 ? 'sm:col-span-2' : ''}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -40 },
                      }}
                    >
                      {cat.type === 'category' && (
                        <motion.button
                          layoutId={cat.id}
                          type="button"
                          onClick={() => setActiveCategory(cat)}
                          className={cx(
                            'p-8 text-left text-2xl sm:text-3xl md:text-5xl font-bold block w-full hover:underline h-full',
                            cat.background,
                            styles.categoryButton
                          )}
                        >
                          <span className="px-4 py-3">{cat.label}</span>
                        </motion.button>
                      )}
                      {cat.type === 'link' && (
                        <Link {...cat.linkProps}>
                          <a
                            onClick={() => close()}
                            className={cx(
                              'p-8 text-left text-2xl sm:text-3xl md:text-5xl font-bold flex items-center w-full hover:underline h-full',
                              cat.background,
                              styles.categoryButton
                            )}
                          >
                            <span className="px-4 py-3">{cat.label}</span>
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
                        activeCategory.background,
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
                          onClick={() => close()}
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
