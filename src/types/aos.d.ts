declare module "aos" {
  interface AosOptions {
    duration?: number;
    delay?: number;
    offset?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
  }

  interface Aos {
    init(options?: AosOptions): void;
    refresh(): void;
  }

  const AOS: Aos;
  export default AOS;
}
