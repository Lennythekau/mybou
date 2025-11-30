
import NextAuth from "next-auth"
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [MicrosoftEntraID({
        async profile(profile) {
            console.log("profile called");
            console.log(profile);
            return { ...profile };
        },
        authorization: {
            params: {
                scope: "openid profile email User.Read Mail.Read Calendars.Read"
            }
        }
    })],
    callbacks: {
        async jwt({ token, user, account }) {
            console.log("JWT");
            console.log(user);
            console.log(token);
            console.log(account);
            return token;
        },
        async session({ token, session }) {
            console.log("session:")
            console.log(token);
            return session;
        }
    }
})
