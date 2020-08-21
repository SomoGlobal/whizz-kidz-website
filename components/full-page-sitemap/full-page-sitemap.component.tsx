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
import IconButton from '../icon-button';

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
    children: sampleLinks,
    background: brands.home.backgroundColor,
  },
  {
    id: '1',
    label: 'Kidz',
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
    children: sampleLinks,
    background: brands.supporters.backgroundColor,
  },
  {
    id: '4',
    label: 'Discover',
    children: sampleLinks,
    background: brands.discover.backgroundColor,
  },
  {
    id: '5',
    label: 'The Charity',
    children: sampleLinks,
    background: 'bg-yellow-600',
  },
  {
    id: '6',
    label: 'Website Policies',
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

  return (
    <>
      <IconButton
        className="text-gray-800"
        type="menu"
        onClick={() => {
          setActiveCategory(null);
          setOpen(true);
        }}
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
            className="fixed top-0 left-0 h-screen w-screen overflow-contain"
            style={{ zIndex: 99999 }}
          >
            <section className="relative h-full mx-auto text-white bg-gray-200 shadow-2xl xl:container flex flex-col">
              <AnimateSharedLayout type="switch">
                <div className="sticky top-0 z-50 flex items-center justify-end py-2 px-4 text-gray-800 bg-white">
                  <div className="flex-1">
                    <h1
                      id="nav-modal"
                      className="inline py-3 px-4 text-3xl font-bold bg-white clone"
                    >
                      Navigation
                    </h1>
                  </div>
                  <IconButton type="close" onClick={() => setOpen(false)} />
                </div>
                <ul
                  className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:grid-flow-col sm:grid-rows-4 flex-1"
                  aria-label="Navigation Category"
                >
                  {menu.map((cat, index) => (
                    <li
                      key={cat.id}
                      className={index === 0 ? 'sm:col-span-2' : ''}
                    >
                      <motion.button
                        layoutId={cat.id}
                        whileHover={{ border: '1rem' }}
                        type="button"
                        onClick={() => setActiveCategory(cat)}
                        className={cx(
                          'p-10 text-left text-2xl sm:text-3xl md:text-5xl font-bold block w-full hover:underline h-full border-white',
                          cat.background
                        )}
                      >
                        {cat.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
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
                        layout
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
                          <h1 className="inline py-3 px-4 text-3xl font-bold bg-white clone">
                            {activeCategory.label}
                          </h1>
                        </div>
                        <IconButton
                          type="close"
                          className="text-white"
                          onClick={() => setOpen(false)}
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
