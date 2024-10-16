import { cn } from "@/lib/utils";
import { Users } from "@phosphor-icons/react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { ComponentPropsWithoutRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const data = [
  {
    label: "Perfis pessoais",
    groups: [
      {
        label: "Samuel Laurindo",
        value: "samuel-laurindo",
      },
      {
        label: "Raquel Laurindo",
        value: "raquel-laurindo",
      },
    ],
  },
  {
    label: "Grupos",
    groups: [
      {
        label: "Família Laurindo",
        value: "familia-laurindo",
      },
      {
        label: "Diet Tracker",
        value: "diet-tracker",
      },
    ],
  },
];

type Team = (typeof data)[number]["groups"][number];

type PopoverTriggerProps = ComponentPropsWithoutRef<typeof PopoverTrigger>;

type ProfileSwitcherProps = PopoverTriggerProps;

export default function ProfileSwitcher({ className }: ProfileSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team>(data[0].groups[0]);

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a team"
            className={cn("w-[200px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedTeam.value}.png`}
                alt={selectedTeam.label}
              />
              <AvatarFallback>SL</AvatarFallback>
            </Avatar>
            {selectedTeam.label}
            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Procurar..." />
            <CommandList>
              <CommandEmpty>Nenhum perfil ou grupo encontrado.</CommandEmpty>
              {data.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.groups.map((group) => (
                    <CommandItem
                      key={group.value}
                      onSelect={() => {
                        setSelectedTeam(group);
                        setOpen(false);
                      }}
                      className="text-sm"
                    >
                      <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${group.value}.png`}
                          alt={group.label}
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      {group.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedTeam.value === group.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      setShowNewTeamDialog(true);
                    }}
                  >
                    {/* <UserRoundPen className="mr-2 h-5 w-5" /> */}
                    <Users className="mr-2 h-5 w-5" />
                    Gerenciar Perfis
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Team name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{" "}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{" "}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
