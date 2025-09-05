import { useSupabaseConnection } from '@/hooks/use-supabase'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, RefreshCw, Database } from 'lucide-react'

interface DatabaseStatusProps {
    showDetails?: boolean
}

const DatabaseStatus = ({ showDetails = true }: DatabaseStatusProps) => {
    const { isConnected, error, testConnection } = useSupabaseConnection()

    const getStatusIcon = () => {
        if (isConnected === null) {
            return <RefreshCw className="h-4 w-4 animate-spin" />
        }
        return isConnected ? (
            <CheckCircle className="h-4 w-4 text-green-500" />
        ) : (
            <XCircle className="h-4 w-4 text-red-500" />
        )
    }

    const getStatusText = () => {
        if (isConnected === null) return 'Testing connection...'
        return isConnected ? 'Connected' : 'Disconnected'
    }

    const getStatusColor = () => {
        if (isConnected === null) return 'secondary'
        return isConnected ? 'success' : 'destructive'
    }

    if (!showDetails) {
        return (
            <div className="flex items-center gap-2">
                {getStatusIcon()}
                <Badge variant={getStatusColor() as any}>
                    {getStatusText()}
                </Badge>
            </div>
        )
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Database Status
                </CardTitle>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={testConnection}
                    disabled={isConnected === null}
                >
                    <RefreshCw className={`h-3 w-3 mr-1 ${isConnected === null ? 'animate-spin' : ''}`} />
                    Test
                </Button>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon()}
                    <Badge variant={getStatusColor() as any}>
                        {getStatusText()}
                    </Badge>
                </div>

                {error && (
                    <div className="text-sm text-red-600 bg-red-50 p-2 rounded mt-2">
                        <strong>Error:</strong> {error}
                    </div>
                )}

                {isConnected && (
                    <div className="text-sm text-green-600 bg-green-50 p-2 rounded mt-2">
                        ✅ Supabase connection is working correctly
                    </div>
                )}

                {isConnected === false && (
                    <div className="text-sm text-orange-600 bg-orange-50 p-2 rounded mt-2">
                        <strong>Setup Required:</strong>
                        <ol className="list-decimal list-inside mt-1 space-y-1">
                            <li>Create a Supabase project</li>
                            <li>Run the SQL setup script</li>
                            <li>Update your .env.local file</li>
                        </ol>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default DatabaseStatus
