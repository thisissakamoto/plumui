import type { Story, StoryDefault } from "@ladle/react";
import { Card } from "../card";
import { Image } from "../image";
import { Marquee } from ".";

export default {
  title: "Marquee",
} satisfies StoryDefault


export const Base: Story<Marquee.RootProps> = () => {
  return (
    <Marquee.Root maxW="480px" side="end">
      <Marquee.Edge side="start" />
      <Marquee.Viewport>
        <Marquee.Content>
          {logos.map((logo, idx) => {
            return (
              <Marquee.Item key={idx.toString()} asChild>
                <Card.Root py="8" pl="8" pr="16" gap="8" layout="inline" radius="xl" alignItems="center" visual="outlined">
                  <Card.Media>
                    <Image src={logo.logoUrl} alt={logo.name} radius="full" boxSize="20" />
                  </Card.Media>
                  <Card.Subtitle>{logo.name}</Card.Subtitle>
                </Card.Root>
              </Marquee.Item>
            )
          })}
        </Marquee.Content>
      </Marquee.Viewport>
      <Marquee.Edge side="end" />
    </Marquee.Root>
  )
};

const logos = [
  {
    name: "Microsoft",
    logo: "🏢",
    logoUrl: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1727706673120"
  },
  {
    name: "Apple",
    logo: "🍎",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/960px-Apple_Store_logo.svg.png"
  },
  {
    name: "Google",
    logo: "🔍",
    logoUrl: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1755835725776"
  },
  {
    name: "Amazon",
    logo: "📦",
    logoUrl: "https://cdn.brandfetch.io/idawOgYOsG/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1747149745978"
  },
  {
    name: "Netflix",
    logo: "📺",
    logoUrl: "https://cdn.brandfetch.io/ideQwN5lBE/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1741362553726"
  },
  {
    name: "Spotify",
    logo: "🎵",
    logoUrl: "https://cdn.brandfetch.io/id20mQyGeY/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1737597212873"
  },
]
