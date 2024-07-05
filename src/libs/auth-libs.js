import {getServerSession} from 'next-auth';
import {authOption} from '@/app/api/auth/[...nextauth]/route';

export const authUserSession = async () => {
	const session = await getServerSession(authOption);
	// Jika ada data user, kembalikan.. jika tidak, kembalikan null
	return session?.user;
};

