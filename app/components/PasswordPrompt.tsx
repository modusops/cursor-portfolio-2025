'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface PasswordPromptProps {
  projectSlug: string;
  onSuccess: () => void;
}

export function PasswordPrompt({ projectSlug, onSuccess }: PasswordPromptProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectSlug, password }),
      });

      // Handle non-JSON responses (like 502 Bad Gateway)
      if (!response.ok && response.status === 502) {
        setError(`Server error (502). The API route may not be deployed correctly. Check Netlify logs for: /api/verify-password`);
        setIsLoading(false);
        return;
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        setError(`Server returned invalid response (Status: ${response.status}). Check Netlify function logs.`);
        setIsLoading(false);
        return;
      }

      if (data.success) {
        setIsOpen(false);
        onSuccess();
      } else {
        const errorMsg = data.error || 'Incorrect password';
        const details = data.details ? ` (${data.details})` : '';
        setError(`${errorMsg}${details}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(`Network error: ${errorMessage}. Check your connection and try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Password Protected</DialogTitle>
          <DialogDescription>
            This project requires a password to view.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            className={error ? 'border-red-500' : ''}
            disabled={isLoading}
            autoFocus
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Access Project'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
