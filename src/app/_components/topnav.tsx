import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export const TopNav = () => {
  return (
    <nav className="font-semi-bold flex w-full items-center justify-between self-center border-b object-center p-4 text-xl">
      <div>Gallery</div>
      <div>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
    </nav>
  );
};
