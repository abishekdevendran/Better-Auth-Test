import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {

	// if (!session) {
	// 	throw redirect(302, '/auth/signin');
	// }

	return {
		session: locals.session,
		user: locals.user
	};
}