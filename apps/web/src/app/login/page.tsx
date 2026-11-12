'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Brand } from '@/components/auth/Brand';
export default function LoginPage(){
 const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [message,setMessage]=useState('');
 function submit(e:React.FormEvent){e.preventDefault();setMessage('Frontend demo only. Authentication will be connected when the backend is available.');}
 return <main className="auth-shell"><section className="auth-card"><div style={{display:'flex',justifyContent:'center'}}><Brand/></div><h1 className="auth-heading">Sign In</h1><form onSubmit={submit} style={{display:'grid',gap:18}}><div className="field"><label htmlFor="email">Email</label><input id="email" className="control" type="email" autoComplete="username" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email"/></div><div className="field"><label htmlFor="password">Password</label><input id="password" className="control" type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password"/></div><button className="btn btn-green" type="submit">LOGIN</button>{message&&<div className="alert alert-success">{message}</div>}</form><div className="auth-links"><div>Forgot Your Password? <Link className="text-link" href="/forgot-password" style={{display:'block',marginTop:8}}>CHANGE PASSWORD</Link></div><div style={{marginTop:10}}>Don&apos;t Have An Account Yet? <Link className="text-link" href="/register" style={{display:'block',marginTop:8}}>REGISTER AS MEMBER</Link></div></div></section></main>
}
