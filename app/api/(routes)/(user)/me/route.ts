// todo
import { User, currentUser } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try{
        const user: User | null = await currentUser();

        if(!user){
            return new NextResponse("Please login to access this resource!", {
                status: 400,
            });
        }

        // todo -> check whether user has a shop or not

        return NextResponse.json({user});
    } catch(error){
        console.log('load user error', error);
        return new NextResponse("Internal Error", {status: 500});
    }
}