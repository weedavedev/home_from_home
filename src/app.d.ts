declare global {
	namespace App {
		interface Locals {
			userid: string;
		}
	}
	interface ImportMetaEnv {
		PUBLIC_WEB3FORMS_KEY: string;
	}
}

export {};