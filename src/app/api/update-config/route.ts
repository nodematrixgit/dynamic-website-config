import { NextRequest, NextResponse } from 'next/server';
import { updateConfig } from '@/lib/config';

export async function POST(request: NextRequest) {
  try {
    // Verify API secret if provided
    const apiSecret = request.headers.get('x-api-secret');
    const expectedSecret = process.env.VERCEL_API_SECRET;

    if (expectedSecret && apiSecret !== expectedSecret) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Update config (in a real app, you'd store this in a database)
    // For now, we'll return the config to be stored client-side
    const config = {
      tokenName: body.tokenName,
      tokenSymbol: body.tokenSymbol,
      tokenAddress: body.tokenAddress,
      poolAddress: body.poolAddress,
      totalSupply: body.totalSupply,
      website: body.website,
      twitter: body.twitter,
      telegram: body.telegram,
      description: body.description,
      chain: body.chain,
    };

    return NextResponse.json({
      success: true,
      config,
      message: 'Config updated. Client should refresh to see changes.',
    });
  } catch (error: any) {
    console.error('Error updating config:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update config' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'NodeMatrix Dynamic Website Config API',
    endpoint: '/api/update-config',
    method: 'POST',
  });
}

