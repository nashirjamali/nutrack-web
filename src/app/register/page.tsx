'use client';

import { submit } from './handler';

export default function Register() {
  return (
    <div>
      Register
      <button onClick={submit}>Submit</button>
    </div>
  );
}
