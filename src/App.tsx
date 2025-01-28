import React from 'react';
import './App.css';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import { SignInPage, SignUpPage } from './pages';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  // const { data: count, call: refetchCount } = useQueryCall({
  //   functionName: 'get',
  // });

  // const { call: increment, loading } = useUpdateCall({
  //   functionName: 'inc',
  //   onSuccess: () => {
  //     refetchCount();
  //   },
  // });

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
