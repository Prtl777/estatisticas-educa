"use client"

import type React from "react"

import { BarChart3, Table, FileSpreadsheet, PieChart, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function AnimatedChart({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { elementRef, isVisible } = useScrollAnimation()
  return (
    <div ref={elementRef} className={`animate-on-scroll ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  )
}

export const sections = [
  {
    id: "estatistica",
    title: "Estatística",
    icon: <BarChart3 className="h-5 w-5" />,
    content: (
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">O que é Estatística?</h2>
          <p className="leading-relaxed text-muted-foreground mb-4">
            A <strong className="text-foreground">estatística</strong> é o campo da matemática que{" "}
            <strong className="text-foreground">relaciona fatos e números</strong> em que há um conjunto de métodos que
            nos possibilita coletar dados e analisá-los, assim sendo possível realizar alguma interpretação deles.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3 text-primary">Divisões da Estatística</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            A estatística é dividida em duas partes principais:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-accent/10 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-lg mb-2 text-accent">Estatística Descritiva</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Caracterizada pela organização, análise e apresentação dos dados de forma clara e objetiva.
              </p>
            </div>

            <div className="p-5 bg-accent/10 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-lg mb-2 text-accent">Estatística Inferencial</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Estuda uma amostra de determinada população e, com base nela, realiza análises e apresenta conclusões.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-primary">Importância</h3>
          <p className="leading-relaxed text-muted-foreground mb-3">
            Quando se estuda uma massa de dados, é de frequente interesse resumir as informações de variáveis.
          </p>
          <p className="leading-relaxed text-muted-foreground mb-3">
            Costuma-se, frequentemente, para uma melhor compreensão dos mesmos, distribuí-los em classes ou intervalos,
            determinando-se o número de indivíduos pertencentes a cada classe ou intervalo.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Com isso, podemos resumir e visualizar um conjunto de dados sem precisar levar em conta os valores
            individuais.
          </p>
        </section>

        <section>
          <p className="leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-4">
            Uma distribuição de frequências pode ser apresentada por meio de tabelas que, por sua vez, podem ser
            representadas por meio de gráficos.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: "tabela-frequencia",
    title: "Tabela de Frequência",
    icon: <Table className="h-5 w-5" />,
    content: (
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Definições Importantes</h2>
          <p className="leading-relaxed text-muted-foreground mb-6">
            Para trabalhar com tabelas de frequência, é essencial compreender alguns conceitos fundamentais:
          </p>
        </section>

        <section className="space-y-4">
          <div className="p-5 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-accent">Dados Brutos</h3>
            <p className="leading-relaxed text-muted-foreground">
              Conjunto de dados que ainda não foram numericamente organizados, obtidos após a crítica dos valores.
            </p>
          </div>

          <div className="p-5 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-accent">Rol</h3>
            <p className="leading-relaxed text-muted-foreground">
              É um arranjo dos dados brutos em ordem crescente ou decrescente.
            </p>
          </div>

          <div className="p-5 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-accent">
              Frequência Absoluta Simples (f<sub>i</sub>)
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              É o número de observações que se encontra presente em uma classe ou intervalo específico.
            </p>
          </div>

          <div className="p-5 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-accent">
              Frequência Relativa (f<sub>r</sub>)
            </h3>
            <p className="leading-relaxed text-muted-foreground mb-3">
              Representa o percentual de um certo valor na amostra. É calculada dividindo a frequência absoluta pelo
              total de observações.
            </p>
            <div className="bg-secondary/50 p-4 rounded font-mono text-sm">
              f<sub>r</sub> = (f<sub>i</sub> / n) × 100%
            </div>
          </div>

          <div className="p-5 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-accent">
              Frequência Acumulada (f<sub>ac</sub>)
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              É a soma das frequências simples das classes ou dos valores anteriores.
            </p>
          </div>

          <div className="p-5 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-accent">
              Frequência Percentual Acumulada (f<sub>ra</sub>)
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              É a soma das frequências relativas percentuais das classes ou dos valores.
            </p>
          </div>
        </section>

        <section className="bg-accent/10 p-6 rounded-lg border border-accent/20">
          <h3 className="text-xl font-semibold mb-3 text-primary">Exemplo Prático</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            Considere as notas de 10 alunos: 7, 8, 6, 9, 7, 8, 7, 10, 8, 7
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-border p-3 text-left">Nota</th>
                  <th className="border border-border p-3 text-left">
                    Frequência (f<sub>i</sub>)
                  </th>
                  <th className="border border-border p-3 text-left">Freq. Relativa (%)</th>
                  <th className="border border-border p-3 text-left">Freq. Acumulada</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="border border-border p-3">6</td>
                  <td className="border border-border p-3">1</td>
                  <td className="border border-border p-3">10%</td>
                  <td className="border border-border p-3">1</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">7</td>
                  <td className="border border-border p-3">4</td>
                  <td className="border border-border p-3">40%</td>
                  <td className="border border-border p-3">5</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">8</td>
                  <td className="border border-border p-3">3</td>
                  <td className="border border-border p-3">30%</td>
                  <td className="border border-border p-3">8</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">9</td>
                  <td className="border border-border p-3">1</td>
                  <td className="border border-border p-3">10%</td>
                  <td className="border border-border p-3">9</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">10</td>
                  <td className="border border-border p-3">1</td>
                  <td className="border border-border p-3">10%</td>
                  <td className="border border-border p-3">10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "criacao-tabelas",
    title: "Criação de Tabelas",
    icon: <FileSpreadsheet className="h-5 w-5" />,
    content: (
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Como Criar uma Tabela de Frequência</h2>
          <p className="leading-relaxed text-muted-foreground mb-6">
            A criação de uma tabela de frequência segue um processo sistemático que organiza dados brutos em informações
            compreensíveis.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary">Passo a Passo</h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Coletar os Dados</h4>
                <p className="leading-relaxed text-muted-foreground">
                  Reúna todos os dados brutos que serão analisados. Estes podem vir de pesquisas, experimentos ou
                  observações.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Organizar em Rol</h4>
                <p className="leading-relaxed text-muted-foreground">
                  Organize os dados em ordem crescente ou decrescente para facilitar a visualização e contagem.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Identificar Classes ou Valores</h4>
                <p className="leading-relaxed text-muted-foreground">
                  Determine quais são os valores únicos ou defina intervalos de classe apropriados para agrupar os
                  dados.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Contar as Frequências</h4>
                <p className="leading-relaxed text-muted-foreground">
                  Conte quantas vezes cada valor ou classe aparece nos dados. Esta é a frequência absoluta.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Calcular Frequências Relativas</h4>
                <p className="leading-relaxed text-muted-foreground">
                  Divida cada frequência absoluta pelo total de observações e multiplique por 100 para obter a
                  porcentagem.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2 text-foreground">Calcular Frequências Acumuladas</h4>
                <p className="leading-relaxed text-muted-foreground">
                  Some as frequências progressivamente para obter as frequências acumuladas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Exemplo Completo</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            <strong className="text-foreground">Dados brutos:</strong> Idades de 15 pessoas em uma pesquisa:
            <br />
            <span className="font-mono bg-card p-2 rounded inline-block mt-2">
              23, 25, 23, 27, 25, 23, 28, 25, 27, 23, 25, 28, 27, 25, 23
            </span>
          </p>

          <p className="leading-relaxed text-muted-foreground mb-4">
            <strong className="text-foreground">Rol (ordem crescente):</strong>
            <br />
            <span className="font-mono bg-card p-2 rounded inline-block mt-2">
              23, 23, 23, 23, 23, 25, 25, 25, 25, 25, 27, 27, 27, 28, 28
            </span>
          </p>

          <p className="leading-relaxed text-muted-foreground mb-4">
            <strong className="text-foreground">Tabela de Frequência:</strong>
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-border p-3 text-left">Idade</th>
                  <th className="border border-border p-3 text-left">
                    f<sub>i</sub>
                  </th>
                  <th className="border border-border p-3 text-left">
                    f<sub>r</sub> (%)
                  </th>
                  <th className="border border-border p-3 text-left">
                    f<sub>ac</sub>
                  </th>
                  <th className="border border-border p-3 text-left">
                    f<sub>ra</sub> (%)
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr>
                  <td className="border border-border p-3">23</td>
                  <td className="border border-border p-3">5</td>
                  <td className="border border-border p-3">33,3%</td>
                  <td className="border border-border p-3">5</td>
                  <td className="border border-border p-3">33,3%</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">25</td>
                  <td className="border border-border p-3">5</td>
                  <td className="border border-border p-3">33,3%</td>
                  <td className="border border-border p-3">10</td>
                  <td className="border border-border p-3">66,6%</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">27</td>
                  <td className="border border-border p-3">3</td>
                  <td className="border border-border p-3">20,0%</td>
                  <td className="border border-border p-3">13</td>
                  <td className="border border-border p-3">86,6%</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">28</td>
                  <td className="border border-border p-3">2</td>
                  <td className="border border-border p-3">13,4%</td>
                  <td className="border border-border p-3">15</td>
                  <td className="border border-border p-3">100%</td>
                </tr>
                <tr className="font-semibold bg-accent/10">
                  <td className="border border-border p-3">Total</td>
                  <td className="border border-border p-3">15</td>
                  <td className="border border-border p-3">100%</td>
                  <td className="border border-border p-3">-</td>
                  <td className="border border-border p-3">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),
  },
  {
    id: "tipos-graficos",
    title: "Tipos de Gráficos",
    icon: <PieChart className="h-5 w-5" />,
    content: (
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Tipos de Gráficos Estatísticos</h2>
          <p className="leading-relaxed text-muted-foreground mb-6">
            Os gráficos são representações visuais de dados que facilitam a compreensão e análise de informações
            estatísticas. Cada tipo de gráfico é adequado para diferentes tipos de dados e objetivos de análise.
          </p>
        </section>

        <section className="space-y-6">
          <div className="p-6 bg-card border-2 border-accent/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">1. Gráfico de Barras</h3>
            <p className="leading-relaxed text-muted-foreground mb-4">
              Utilizado para comparar quantidades entre diferentes categorias. As barras podem ser verticais ou
              horizontais, e há espaçamento entre elas.
            </p>
            <AnimatedChart>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-3 text-foreground">Exemplo: Vendas por trimestre</p>
                <div className="flex items-end gap-3 h-40">
                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-accent rounded-t animate-chart-bar delay-100"
                      style={{ height: "60%" }}
                    ></div>
                    <span className="text-xs mt-2 text-muted-foreground">Q1</span>
                    <span className="text-xs font-semibold text-foreground">150</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-accent rounded-t animate-chart-bar delay-200"
                      style={{ height: "80%" }}
                    ></div>
                    <span className="text-xs mt-2 text-muted-foreground">Q2</span>
                    <span className="text-xs font-semibold text-foreground">200</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-accent rounded-t animate-chart-bar delay-300"
                      style={{ height: "100%" }}
                    ></div>
                    <span className="text-xs mt-2 text-muted-foreground">Q3</span>
                    <span className="text-xs font-semibold text-foreground">250</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-accent rounded-t animate-chart-bar delay-400"
                      style={{ height: "70%" }}
                    ></div>
                    <span className="text-xs mt-2 text-muted-foreground">Q4</span>
                    <span className="text-xs font-semibold text-foreground">175</span>
                  </div>
                </div>
              </div>
            </AnimatedChart>
            <div className="mt-4 p-3 bg-accent/10 rounded">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Quando usar:</strong> Comparar valores entre categorias discretas
              </p>
            </div>
          </div>

          <div className="p-6 bg-card border-2 border-accent/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">2. Gráfico de Linhas</h3>
            <p className="leading-relaxed text-muted-foreground mb-4">
              Ideal para mostrar tendências ao longo do tempo. Os pontos de dados são conectados por linhas, facilitando
              a visualização de mudanças e padrões.
            </p>
            <AnimatedChart>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-3 text-foreground">Exemplo: Temperatura ao longo da semana</p>
                <div className="relative h-40 border-l-2 border-b-2 border-border">
                  <svg className="w-full h-full" viewBox="0 0 300 150">
                    <polyline
                      points="20,100 70,80 120,60 170,70 220,50 270,65"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="3"
                      className="animate-line-draw"
                    />
                    <circle
                      cx="20"
                      cy="100"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-100"
                    />
                    <circle
                      cx="70"
                      cy="80"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-200"
                    />
                    <circle
                      cx="120"
                      cy="60"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-300"
                    />
                    <circle
                      cx="170"
                      cy="70"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-400"
                    />
                    <circle
                      cx="220"
                      cy="50"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-500"
                    />
                    <circle
                      cx="270"
                      cy="65"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-600"
                    />
                  </svg>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                    <span>Qui</span>
                    <span>Sex</span>
                    <span>Sáb</span>
                  </div>
                </div>
              </div>
            </AnimatedChart>
            <div className="mt-4 p-3 bg-accent/10 rounded">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Quando usar:</strong> Mostrar evolução temporal ou tendências
              </p>
            </div>
          </div>

          <div className="p-6 bg-card border-2 border-accent/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">3. Gráfico de Setores (Pizza)</h3>
            <p className="leading-relaxed text-muted-foreground mb-4">
              Representa partes de um todo, mostrando a proporção de cada categoria em relação ao total. Cada fatia
              representa uma porcentagem do conjunto completo.
            </p>
            <AnimatedChart>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-3 text-foreground">Exemplo: Distribuição de despesas mensais</p>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Alimentação - 35% */}
                      <path
                        d="M 100 100 L 100 0 A 100 100 0 0 1 187.94 69.09 Z"
                        fill="hsl(var(--accent))"
                        opacity="1"
                        className="animate-pie-slice delay-100"
                      />
                      {/* Moradia - 30% */}
                      <path
                        d="M 100 100 L 187.94 69.09 A 100 100 0 0 1 158.78 180.90 Z"
                        fill="hsl(var(--accent))"
                        opacity="0.8"
                        className="animate-pie-slice delay-300"
                      />
                      {/* Transporte - 20% */}
                      <path
                        d="M 100 100 L 158.78 180.90 A 100 100 0 0 1 30.90 158.78 Z"
                        fill="hsl(var(--accent))"
                        opacity="0.6"
                        className="animate-pie-slice delay-500"
                      />
                      {/* Lazer - 15% */}
                      <path
                        d="M 100 100 L 30.90 158.78 A 100 100 0 0 1 100 0 Z"
                        fill="hsl(var(--accent))"
                        opacity="0.4"
                        className="animate-pie-slice delay-700"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "hsl(var(--accent))", opacity: 1 }}
                      ></div>
                      <span className="text-sm text-muted-foreground">Alimentação - 35%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "hsl(var(--accent))", opacity: 0.8 }}
                      ></div>
                      <span className="text-sm text-muted-foreground">Moradia - 30%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "hsl(var(--accent))", opacity: 0.6 }}
                      ></div>
                      <span className="text-sm text-muted-foreground">Transporte - 20%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: "hsl(var(--accent))", opacity: 0.4 }}
                      ></div>
                      <span className="text-sm text-muted-foreground">Lazer - 15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedChart>
            <div className="mt-4 p-3 bg-accent/10 rounded">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Quando usar:</strong> Mostrar proporções e partes de um todo (100%)
              </p>
            </div>
          </div>

          {/* Gráfico de Colunas */}
          <div className="p-6 bg-card border-2 border-accent/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">4. Gráfico de Colunas</h3>
            <p className="leading-relaxed text-muted-foreground mb-4">
              Similar ao gráfico de barras, mas com colunas verticais adjacentes (sem espaços). Muito utilizado para
              representar dados agrupados em categorias ou intervalos de classe, facilitando a visualização de
              distribuições.
            </p>
            <AnimatedChart>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-3 text-foreground">Exemplo: Frequência de notas</p>
                <div className="flex items-end gap-0 h-40">
                  <div
                    className="flex-1 bg-accent/60 border-r border-background animate-chart-bar delay-100"
                    style={{ height: "40%" }}
                  >
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">4</div>
                  </div>
                  <div
                    className="flex-1 bg-accent/70 border-r border-background animate-chart-bar delay-200"
                    style={{ height: "70%" }}
                  >
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">7</div>
                  </div>
                  <div
                    className="flex-1 bg-accent border-r border-background animate-chart-bar delay-300"
                    style={{ height: "100%" }}
                  >
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">10</div>
                  </div>
                  <div
                    className="flex-1 bg-accent/80 border-r border-background animate-chart-bar delay-400"
                    style={{ height: "85%" }}
                  >
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">8</div>
                  </div>
                  <div className="flex-1 bg-accent/60 animate-chart-bar delay-500" style={{ height: "50%" }}>
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">5</div>
                  </div>
                </div>
                <div className="flex text-xs text-center text-muted-foreground mt-2">
                  <div className="flex-1">0-2</div>
                  <div className="flex-1">2-4</div>
                  <div className="flex-1">4-6</div>
                  <div className="flex-1">6-8</div>
                  <div className="flex-1">8-10</div>
                </div>
              </div>
            </AnimatedChart>
            <div className="mt-4 p-3 bg-accent/10 rounded">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Quando usar:</strong> Representar frequências de dados agrupados em
                classes
              </p>
            </div>
          </div>

          <div className="p-6 bg-card border-2 border-accent/30 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">5. Gráfico de Dispersão</h3>
            <p className="leading-relaxed text-muted-foreground mb-4">
              Mostra a relação entre duas variáveis quantitativas. Cada ponto representa um par de valores, permitindo
              identificar correlações e padrões.
            </p>
            <AnimatedChart>
              <div className="bg-secondary/50 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-3 text-foreground">Exemplo: Altura vs Peso</p>
                <div className="relative h-40 border-l-2 border-b-2 border-border">
                  <svg className="w-full h-full" viewBox="0 0 300 150">
                    <circle
                      cx="40"
                      cy="110"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-100"
                    />
                    <circle
                      cx="60"
                      cy="100"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-200"
                    />
                    <circle
                      cx="80"
                      cy="95"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-300"
                    />
                    <circle
                      cx="100"
                      cy="85"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-400"
                    />
                    <circle
                      cx="120"
                      cy="80"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-500"
                    />
                    <circle
                      cx="140"
                      cy="70"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-600"
                    />
                    <circle
                      cx="160"
                      cy="65"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-700"
                    />
                    <circle
                      cx="180"
                      cy="55"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-800"
                    />
                    <circle
                      cx="200"
                      cy="50"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-900"
                    />
                    <circle
                      cx="220"
                      cy="45"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-1000"
                    />
                    <circle
                      cx="240"
                      cy="40"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-1000"
                    />
                    <circle
                      cx="260"
                      cy="35"
                      r="4"
                      fill="hsl(var(--accent))"
                      className="animate-scatter-point delay-1000"
                    />
                  </svg>
                </div>
              </div>
            </AnimatedChart>
            <div className="mt-4 p-3 bg-accent/10 rounded">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Quando usar:</strong> Analisar relação entre duas variáveis
              </p>
            </div>
          </div>
        </section>

        <section className="bg-accent/10 p-6 rounded-lg border border-accent/20">
          <h3 className="text-xl font-semibold mb-3 text-primary">Escolhendo o Gráfico Adequado</h3>
          <div className="space-y-3 text-muted-foreground">
            <p className="leading-relaxed">
              A escolha do tipo de gráfico depende do tipo de dados e do objetivo da análise:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>
                  <strong className="text-foreground">Comparação:</strong> Use gráficos de barras
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>
                  <strong className="text-foreground">Evolução temporal:</strong> Use gráficos de linhas
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>
                  <strong className="text-foreground">Proporções:</strong> Use gráficos de setores
                </span>
              </li>
              {/* Atualizado para Gráfico de Colunas */}
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>
                  <strong className="text-foreground">Frequências agrupadas:</strong> Use gráficos de colunas
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">•</span>
                <span>
                  <strong className="text-foreground">Correlação:</strong> Use gráficos de dispersão
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-primary/10 p-6 rounded-lg border border-primary/30">
          <h3 className="text-xl font-semibold mb-3 text-primary">Dicas para Criar Bons Gráficos</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Use títulos claros e descritivos</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Identifique os eixos com rótulos apropriados</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Escolha cores que facilitem a leitura</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Evite poluição visual com elementos desnecessários</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Mantenha a escala consistente e apropriada</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Adicione legendas quando necessário</span>
            </li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    id: "histogramas",
    title: "Histogramas",
    icon: <TrendingUp className="h-5 w-5" />,
    content: (
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-primary">O que é um Histograma?</h2>
          <p className="leading-relaxed text-muted-foreground mb-4">
            Um <strong className="text-foreground">histograma</strong> é um gráfico de barras que representa a
            distribuição de frequências de dados quantitativos contínuos. É uma das ferramentas mais importantes da
            estatística descritiva.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Diferente de um gráfico de barras comum, no histograma as barras são adjacentes (sem espaços), representando
            a continuidade dos dados.
          </p>
        </section>

        <section className="bg-secondary/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Características do Histograma</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-2 text-accent">Eixo Horizontal (X)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Representa as classes ou intervalos dos dados
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-2 text-accent">Eixo Vertical (Y)</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Representa a frequência (absoluta ou relativa)
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-2 text-accent">Barras Adjacentes</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Sem espaços entre elas, indicando continuidade
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-2 text-accent">Altura das Barras</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">Proporcional à frequência da classe</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary">Como Construir um Histograma</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Organize os dados em uma tabela de frequência</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Defina as classes (intervalos) e calcule as frequências
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Desenhe os eixos</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Eixo horizontal para classes e vertical para frequências
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Construa as barras</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Cada barra representa uma classe, com altura proporcional à frequência
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Adicione títulos e rótulos</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Identifique claramente o que cada eixo representa
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 bg-card border-2 border-primary/30 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-primary">Exemplo Prático</h3>
          <p className="leading-relaxed text-muted-foreground mb-4">
            <strong className="text-foreground">Situação:</strong> Alturas de 40 estudantes (em cm)
          </p>

          <div className="mb-6">
            <p className="text-sm font-semibold mb-2 text-foreground">Tabela de Frequência:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="border border-border p-2 text-left">Classe (altura em cm)</th>
                    <th className="border border-border p-2 text-left">Frequência</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-2">150 ├ 155</td>
                    <td className="border border-border p-2">4</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">155 ├ 160</td>
                    <td className="border border-border p-2">8</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">160 ├ 165</td>
                    <td className="border border-border p-2">12</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">165 ├ 170</td>
                    <td className="border border-border p-2">10</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2">170 ├ 175</td>
                    <td className="border border-border p-2">6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <AnimatedChart>
            <div className="bg-secondary/50 p-6 rounded-lg">
              <p className="text-sm font-semibold mb-4 text-foreground text-center">
                Representação Visual do Histograma
              </p>
              <div className="space-y-2">
                <div className="flex items-end gap-1 h-48">
                  <div className="flex-1 bg-accent/80 rounded-t animate-chart-bar delay-100" style={{ height: "33%" }}>
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">4</div>
                  </div>
                  <div className="flex-1 bg-accent/80 rounded-t animate-chart-bar delay-200" style={{ height: "67%" }}>
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">8</div>
                  </div>
                  <div className="flex-1 bg-accent rounded-t animate-chart-bar delay-300" style={{ height: "100%" }}>
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">12</div>
                  </div>
                  <div className="flex-1 bg-accent/80 rounded-t animate-chart-bar delay-400" style={{ height: "83%" }}>
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">10</div>
                  </div>
                  <div className="flex-1 bg-accent/80 rounded-t animate-chart-bar delay-500" style={{ height: "50%" }}>
                    <div className="text-center text-xs pt-2 text-accent-foreground font-semibold">6</div>
                  </div>
                </div>
                <div className="flex gap-1 text-xs text-center text-muted-foreground">
                  <div className="flex-1">150-155</div>
                  <div className="flex-1">155-160</div>
                  <div className="flex-1">160-165</div>
                  <div className="flex-1">165-170</div>
                  <div className="flex-1">170-175</div>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-4">Altura (cm)</p>
              </div>
            </div>
          </AnimatedChart>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 text-primary">Interpretação do Histograma</h3>
          <div className="space-y-3">
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <h4 className="font-semibold mb-1 text-foreground">Distribuição Simétrica</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Quando os dados se distribuem uniformemente em torno do centro
              </p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <h4 className="font-semibold mb-1 text-foreground">Assimetria Positiva</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Quando há concentração de dados à esquerda e cauda longa à direita
              </p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <h4 className="font-semibold mb-1 text-foreground">Assimetria Negativa</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Quando há concentração de dados à direita e cauda longa à esquerda
              </p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
              <h4 className="font-semibold mb-1 text-foreground">Distribuição Bimodal</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Quando há dois picos distintos, indicando dois grupos diferentes nos dados
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary/10 p-6 rounded-lg border border-primary/30">
          <h3 className="text-xl font-semibold mb-3 text-primary">Vantagens do Histograma</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Visualização clara da distribuição dos dados</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Identificação rápida de padrões e tendências</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Facilita a comparação entre diferentes conjuntos de dados</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Útil para detectar outliers (valores atípicos)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Base para análises estatísticas mais avançadas</span>
            </li>
          </ul>
        </section>
      </div>
    ),
  },
]
