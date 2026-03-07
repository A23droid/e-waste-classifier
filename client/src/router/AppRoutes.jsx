import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';

// Lazy load page components
const Home = lazy(() => import('../pages/Home'));
const Classify = lazy(() => import('../pages/Classify'));
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Why = lazy(() => import('../pages/Why'));

// custam loader
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-sm font-medium text-gray-900">Loading</p>
        <p className="text-xs text-gray-500 mt-1">Please wait...</p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route 
          path="/classify" 
          element={
            <PageWrapper>
              <Classify />
            </PageWrapper>
          } 
        />
        <Route 
          path="/why" 
          element={
            <PageWrapper>
              <Why />
            </PageWrapper>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          } 
        />
      </Routes>
    </Suspense>
  );
}