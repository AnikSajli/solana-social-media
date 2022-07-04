import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaSocialMedia } from "../target/types/solana_social_media";

describe("solana-social-media", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaSocialMedia as Program<SolanaSocialMedia>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
