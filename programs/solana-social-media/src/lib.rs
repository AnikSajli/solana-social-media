use anchor_lang::prelude::*;

declare_id!("D6beAK19FuJPRHPF2EASEjEV3wDCvXWKfEAb9Lf7vMiz");

#[program]
pub mod solana_social_media {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
