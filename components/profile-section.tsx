import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, XIcon } from "@/components/social-icons";
import Image from "next/image";

export function ProfileSection() {
  return (
    <div id="profile" className="animate-fade-in-up p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-around">
          <Image
            src="/profile-icon.jpeg"
            alt="profile"
            width={300}
            height={300}
            className="h-auto w-[clamp(10rem,28vw,18rem)] shrink-0"
          />
          <div className="flex min-w-0 flex-col glow-1 justify-around">
            <ul className="list-disc space-y-2 pb-4 pl-8 max-w-xl text-base leading-8 text-foreground/74 sm:text-lg">
              <li>Vue, Ruby on Railsで営業支援ツールのフルスタック開発を6ヶ月</li>
              <li>Nuxt, LalavelでMAツールのフルスタック開発を2年半</li>
              <li>その他、HPや趣味でアプリ制作など</li>
            </ul>

            {/* SNSアイコン */}
            <div className="flex justify-around">
              <Button asChild variant="ghost" size="icon">
                <a
                  href="https://www.instagram.com/nu4_nu_nunu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="size-5" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a
                  href="https://x.com/nu4_nu_nunu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                >
                  <XIcon className="size-5" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a
                  href="https://github.com/enuii3"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon className="size-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
