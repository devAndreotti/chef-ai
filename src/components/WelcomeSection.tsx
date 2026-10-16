import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Users, Lightbulb, ChefHat, Zap, Heart, Globe, Utensils, Coffee, Pizza, Salad, Beef, Fish, Cake } from "lucide-react";

interface WelcomeSectionProps {
  onExampleClick: (example: string) => void;
}

export const WelcomeSection = ({ onExampleClick }: WelcomeSectionProps) => {
  const [selectedExamples, setSelectedExamples] = useState<any[]>([]);

  const exampleVariations = {
    quick: [
      {
        icon: Clock,
        title: "Receita Rápida",
        description: "Tenho ovos, queijo e pão, quero algo em 10 minutos",
        text: "Tenho ovos, queijo e pão. Preciso de algo rápido para o café da manhã!",
        gradient: "from-orange-500 to-red-500"
      },
      {
        icon: Zap,
        title: "Super Rápido",
        description: "Macarrão, alho e azeite para um jantar express",
        text: "Tenho macarrão, alho e azeite. Preciso de algo muito rápido para o jantar!",
        gradient: "from-yellow-500 to-orange-500"
      },
      {
        icon: Coffee,
        title: "Café da Manhã",
        description: "Aveia, banana e mel em 5 minutos",
        text: "Tenho aveia, banana e mel. Quero um café da manhã saudável e rápido!",
        gradient: "from-amber-500 to-yellow-500"
      },
      {
        icon: Utensils,
        title: "Lanche Express",
        description: "Pão, presunto e queijo para um lanche",
        text: "Tenho pão, presunto e queijo. Quero fazer um lanche gostoso rapidinho!",
        gradient: "from-green-500 to-teal-500"
      },
      {
        icon: Pizza,
        title: "Pizza Rápida",
        description: "Pão sírio, molho de tomate e queijo",
        text: "Tenho pão sírio, molho de tomate e queijo. Quero uma pizza rápida!",
        gradient: "from-red-500 to-pink-500"
      }
    ],
    family: [
      {
        icon: Users,
        title: "Para a Família",
        description: "Frango, arroz, tomate e cebola para 4 pessoas",
        text: "Tenho frango, arroz, tomate e cebola. Preciso alimentar 4 pessoas hoje!",
        gradient: "from-blue-500 to-purple-500"
      },
      {
        icon: Heart,
        title: "Almoço Familiar",
        description: "Carne moída, batata e cenoura para 6 pessoas",
        text: "Tenho carne moída, batata e cenoura. Preciso fazer almoço para a família toda!",
        gradient: "from-pink-500 to-rose-500"
      },
      {
        icon: ChefHat,
        title: "Jantar Especial",
        description: "Peixe, legumes e arroz para ocasião especial",
        text: "Tenho peixe fresco, legumes variados e arroz. Quero um jantar especial para a família!",
        gradient: "from-indigo-500 to-blue-500"
      },
      {
        icon: Beef,
        title: "Churrasco Caseiro",
        description: "Carne, linguiça e acompanhamentos",
        text: "Tenho carne, linguiça e alguns vegetais. Vamos fazer um churrasco em família!",
        gradient: "from-red-600 to-orange-600"
      },
      {
        icon: Globe,
        title: "Comida Internacional",
        description: "Ingredientes para pratos de outros países",
        text: "Tenho ingredientes variados e quero experimentar uma receita internacional para a família!",
        gradient: "from-purple-500 to-indigo-500"
      }
    ],
    creative: [
      {
        icon: Lightbulb,
        title: "Seja Criativo",
        description: "Batata, brócolis e linguiça, surpreenda-me!",
        text: "Tenho batata, brócolis e linguiça. Me surpreenda com algo diferente!",
        gradient: "from-green-500 to-blue-500"
      },
      {
        icon: Sparkles,
        title: "Inovação Culinária",
        description: "Ingredientes únicos para criar algo novo",
        text: "Tenho abacate, quinoa e castanhas. Quero algo super inovador e saudável!",
        gradient: "from-emerald-500 to-teal-500"
      },
      {
        icon: Cake,
        title: "Sobremesa Criativa",
        description: "Frutas e ingredientes doces para inovar",
        text: "Tenho frutas variadas, chocolate e cream cheese. Quero uma sobremesa criativa!",
        gradient: "from-pink-400 to-purple-400"
      },
      {
        icon: Salad,
        title: "Salada Especial",
        description: "Folhas, grãos e molhos únicos",
        text: "Tenho folhas verdes, grão-de-bico e ingredientes para molho. Quero uma salada especial!",
        gradient: "from-lime-500 to-green-500"
      },
      {
        icon: Fish,
        title: "Peixe Gourmet",
        description: "Peixe e temperos para algo sofisticado",
        text: "Tenho peixe fresco e temperos especiais. Quero preparar algo gourmet e criativo!",
        gradient: "from-cyan-500 to-blue-500"
      }
    ]
  };

  const getRandomExamples = () => {
    const quick = exampleVariations.quick[Math.floor(Math.random() * exampleVariations.quick.length)];
    const family = exampleVariations.family[Math.floor(Math.random() * exampleVariations.family.length)];
    const creative = exampleVariations.creative[Math.floor(Math.random() * exampleVariations.creative.length)];
    
    return [quick, family, creative];
  };

  useEffect(() => {
    setSelectedExamples(getRandomExamples());
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Message */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="neon-gradient p-6 rounded-full pulse-glow">
            <Sparkles className="w-16 h-16 text-background" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground">
            <span className="chef-title">Olá! Eu sou o Chef AI</span> 👨‍🍳
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformo os ingredientes que você tem em casa em receitas incríveis! 
            Sem desperdício, só criatividade e sabor.
          </p>
        </div>
      </div>

      {/* Example Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {selectedExamples.map((example, index) => {
          const Icon = example.icon;
          return (
            <Card 
              key={index}
              className="glass-morphism border-border/50 hover:border-primary/50 transition-all duration-500 cursor-pointer glow-on-hover group float-animation relative overflow-hidden"
              onClick={() => onExampleClick(example.text)}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${example.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {example.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-base">
                  {example.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full justify-center text-sm font-medium text-primary hover:text-primary-foreground hover:bg-primary/20 group-hover:bg-primary/30 transition-all duration-300"
                >
                  Experimentar
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card className="glass-morphism p-8 space-y-4">
          <h3 className="font-bold text-xl text-primary flex items-center gap-3">
            <Sparkles className="w-6 h-6" />
            O que eu posso fazer por você:
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Criar receitas com seus ingredientes
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Adaptar para restrições alimentares
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Calcular tempo e porções
            </li>
          </ul>
        </Card>
        
        <Card className="glass-morphism p-8 space-y-4">
          <h3 className="font-bold text-xl text-accent flex items-center gap-3">
            <Lightbulb className="w-6 h-6" />
            Dicas para melhores resultados:
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Liste todos os ingredientes disponíveis
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Me conte suas preferências
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              Mencione restrições ou alergias
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Diga quanto tempo você tem
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
